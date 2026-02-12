import { useMemo, useState } from "react";

export default function PortfolioAIWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I’m Joshua Portfolio AI. Ask me about Joshua or programming (React/JS).",
    },
  ]);

  const charCount = useMemo(() => input.length, [input]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: next,
        }),
      });

      const data = await res.json();
      const reply =
        (data?.reply || "").trim() || "Sorry, I can’t reply right now.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full px-5 py-3 shadow-lg
                   border border-black/20 dark:border-white/20
                   bg-white dark:bg-black text-sm font-semibold
                   hover:opacity-80 transition"
      >
        🤖 Ask Joshua AI
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 w-[360px] max-w-[92vw]
                     rounded-2xl border border-black/20 dark:border-white/20
                     bg-white dark:bg-black shadow-xl overflow-hidden"
        >
          <div className="p-4 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <div>
              <div className="font-semibold text-sm">Joshua Portfolio AI</div>
              <div className="text-xs opacity-70">
                Gemini-powered • Ask about services, projects, React/JS
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xl leading-none opacity-70 hover:opacity-100 transition"
              aria-label="Close"
              type="button"
            >
              ×
            </button>
          </div>

          <div className="p-4 max-h-[320px] overflow-auto space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                    m.role === "user"
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 dark:bg-white/10"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && <div className="text-xs opacity-60">Typing…</div>}
          </div>

          <div className="p-4 border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask something..."
                className="flex-1 rounded-xl border border-black/20 dark:border-white/20
                           bg-transparent px-3 py-2 text-sm outline-none"
                maxLength={500}
              />

              <button
                onClick={send}
                disabled={loading}
                className="rounded-xl px-4 py-2 border border-black/20 dark:border-white/20
                           shadow-md dark:shadow-white/10 text-sm font-semibold
                           hover:opacity-80 transition disabled:opacity-50"
                type="button"
                title="Send"
              >
                ➜
              </button>
            </div>

            <div className="mt-2 text-xs opacity-60 flex justify-between">
              <span>Gemini AI</span>
              <span>{charCount}/500</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
