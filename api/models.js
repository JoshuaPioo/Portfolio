export default async function handler(req, res) {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    const r = await fetch(url);
    const json = await r.json();

    // Show only useful info
    const models = (json.models || []).map((m) => ({
      name: m.name, // e.g. "models/gemini-1.5-flash"
      displayName: m.displayName,
      supportedGenerationMethods: m.supportedGenerationMethods,
    }));

    return res.status(200).json({ models });
  } catch (e) {
    console.error("MODELS ERROR:", e);
    return res.status(500).json({ error: String(e) });
  }
}
