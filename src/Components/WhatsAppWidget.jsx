import { useMemo, useState } from "react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  // ✅ Your PH WhatsApp number (no +, no spaces)
  const phone = "639919947632";

  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      msg.trim() || "Hi Joshua! I saw your portfolio.",
    );
    return `https://wa.me/${phone}?text=${text}`;
  }, [msg]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full px-5 py-3 shadow-lg
                   border border-black/20 dark:border-white/20
                   bg-white dark:bg-black text-sm font-semibold
                   hover:opacity-80 transition"
      >
        💬 Chat with Joshua
      </button>

      {/* Popup */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-[360px] max-w-[92vw]
                     rounded-2xl border border-black/20 dark:border-white/20
                     bg-white dark:bg-black shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              {/* avatar placeholder */}
              <div className="w-9 h-9 rounded-full border border-black/20 dark:border-white/20 overflow-hidden">
                <img
                  src="/Joshua.png"
                  alt="Joshua"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div>
                <div className="font-semibold text-sm">Chat with Joshua</div>
                <div className="text-xs opacity-70 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  Online
                </div>
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

          {/* Body */}
          <div className="p-4">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full border border-black/20 dark:border-white/20 overflow-hidden mt-1">
                <img
                  src="/Joshua.png"
                  alt="Joshua"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="max-w-[85%] rounded-2xl bg-black/5 dark:bg-white/10 p-3 text-sm">
                Hi there! 👋 Thanks for visiting my website. Feel free to
                message me about web dev, programming, or my projects.
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-black/20 dark:border-white/20
                           bg-transparent px-3 py-2 text-sm outline-none"
                maxLength={1000}
              />

              {/* Send -> opens WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 border border-black/20 dark:border-white/20
                           shadow-md dark:shadow-white/10 text-sm font-semibold
                           hover:opacity-80 transition"
                title="Send via WhatsApp"
              >
                ➜
              </a>
            </div>

            <div className="mt-2 text-xs opacity-60 flex justify-between">
              <span>Opens WhatsApp</span>
              <span>{msg.length}/1000</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
