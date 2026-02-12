import fs from "fs";
import path from "path";

function loadKnowledge() {
  const filePath = path.join(process.cwd(), "data", "joshua-knowledge.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function pickRelevantDocs(knowledge, query, k = 5) {
  const qWords = query
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const scored = knowledge.map((doc) => {
    const hay = (doc.title + " " + doc.text).toLowerCase();
    let score = 0;

    for (const w of qWords) {
      if (w.length >= 3 && hay.includes(w)) score += 1;
    }

    return { ...doc, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .filter((d) => d.score > 0)
    .slice(0, k);
}

// Cache the chosen model in memory to avoid calling listModels every request
let cachedModelName = null;

async function getWorkingModelName(apiKey) {
  if (cachedModelName) return cachedModelName;

  const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const r = await fetch(listUrl);
  const json = await r.json();

  const models = json.models || [];

  // Pick first model that supports generateContent
  const usable = models.find((m) =>
    (m.supportedGenerationMethods || []).includes("generateContent"),
  );

  if (!usable?.name) {
    throw new Error(
      "No available model supports generateContent for this API key. Check /api/models.",
    );
  }

  cachedModelName = usable.name; // e.g. "models/gemini-1.5-flash"
  return cachedModelName;
}

async function generateWithGemini({ apiKey, modelName, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  };

  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = await r.json();

  if (!r.ok) {
    // Show useful error
    throw new Error(
      `Gemini error ${r.status}: ${JSON.stringify(json).slice(0, 500)}`,
    );
  }

  const text =
    json?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";

  return text.trim();
}

export default async function handler(req, res) {
  // If you open /api/chat in browser (GET), don’t crash
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ ok: true, hint: "Send POST JSON to /api/chat" });
  }

  try {
    const { messages, message, history } = req.body || {};

    // Support both payload styles:
    // A) { messages: [...] } (your WhatsAppAIWidget uses this)
    // B) { message: "hi", history: [...] } (your other widget)
    let userText = "";

    if (Array.isArray(messages)) {
      const lastUser = [...messages].reverse().find((m) => m?.role === "user");
      userText = String(lastUser?.content || "").trim();
    } else {
      userText = String(message || "").trim();
    }

    if (!userText)
      return res.status(400).json({ error: "Message is required" });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    const knowledge = loadKnowledge();
    const docs = pickRelevantDocs(knowledge, userText, 5);

    const context = docs.length
      ? docs.map((d) => `### ${d.title}\n${d.text}`).join("\n\n")
      : "No relevant portfolio notes found.";

    const convo = (
      Array.isArray(history) ? history : Array.isArray(messages) ? messages : []
    )
      .slice(-8)
      .map(
        (m) =>
          `${m.role === "user" ? "User" : "Assistant"}: ${String(m.content || "")}`,
      )
      .join("\n");

    const prompt = `
You are "Joshua Portfolio AI".

STRICT RULES:
1) If user asks about Joshua (skills/services/projects/contact), answer ONLY using Context.
2) If not in Context, say: "I don’t have that info yet—please ask Joshua directly."
3) If the question is general programming (React/JS/web dev), you may answer normally with clear steps.
4) Keep it short, friendly, and practical.

Context:
${context}

Conversation:
${convo}

User: ${userText}
Assistant:
`;

    const modelName = await getWorkingModelName(apiKey);
    const reply = await generateWithGemini({ apiKey, modelName, prompt });

    return res.status(200).json({
      reply: reply || "Sorry, I can’t reply right now.",
      modelUsed: modelName,
      sources: docs.map((d) => ({ id: d.id, title: d.title })),
    });
  } catch (err) {
    console.error("CHAT API ERROR:", err);
    return res.status(500).json({
      error: "Server crashed. Check terminal logs.",
      details: String(err?.message || err),
    });
  }
}
