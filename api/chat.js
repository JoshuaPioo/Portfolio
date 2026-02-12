import { GoogleGenerativeAI } from "@google/generative-ai";
import knowledge from "../data/joshua-knowledge.json" assert { type: "json" };

function pickRelevantDocs(query, k = 5) {
  const qWords = query
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const scored = knowledge.map((doc) => {
    const hay = (doc.title + " " + doc.text).toLowerCase();
    let score = 0;

    for (const w of qWords) {
      // basic keyword hit scoring
      if (w.length >= 3 && hay.includes(w)) score += 1;
    }

    return { ...doc, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .filter((d) => d.score > 0)
    .slice(0, k);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message, history } = req.body || {};
    const userMessage = (message || "").trim();

    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    const docs = pickRelevantDocs(userMessage, 5);

    const context = docs.length
      ? docs.map((d) => `### ${d.title}\n${d.text}`).join("\n\n")
      : "No relevant portfolio notes found.";

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Keep last few turns to feel like chat
    const safeHistory = Array.isArray(history)
      ? history.slice(-6).map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: String(m.content || "") }],
        }))
      : [];

    const chat = model.startChat({ history: safeHistory });

    const prompt = `
You are "Joshua Portfolio AI", a helpful assistant on Joshua's portfolio website.

RULES (strict):
1) Use ONLY the Context below when answering about Joshua (skills, services, projects, contact, experience).
2) If the answer is not in Context, say: "I don’t have that info yet—please ask Joshua directly."
3) If the question is general programming (React/JS), you CAN answer normally with clear explanation.
4) Be friendly and short. Use bullet points when helpful.

Context:
${context}

User message: ${userMessage}
`;

    const result = await chat.sendMessage(prompt);
    const reply = result.response.text().trim();

    return res.status(200).json({
      reply,
      sources: docs.map((d) => ({ id: d.id, title: d.title })),
    });
  } catch (err) {
    console.error(err);
    return res.status(200).json({
      reply: "Sorry, something went wrong. Please try again.",
      sources: [],
    });
  }
}
