import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Convert chat history to a prompt
    const prompt =
      `You are Joshua's portfolio assistant.\n` +
      `Be short, friendly, and helpful.\n` +
      `If asked about hiring/project, ask for: name, project, timeline, budget.\n\n` +
      messages
        .slice(-12)
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n") +
      "\nAssistant:";

    const result = await model.generateContent(prompt);
    const reply = result.response.text().trim();

    return res.status(200).json({ reply });
  } catch (e) {
    console.error(e);
    return res.status(200).json({ reply: "Sorry, I can't reply right now." });
  }
}
