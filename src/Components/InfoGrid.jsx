import Card from "./Card";

const Item = ({ label, value, href }) => {
  const content = (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm font-semibold">{label}</div>
      <div className="text-sm opacity-80 text-right">{value}</div>
    </div>
  );

  const baseClasses = `
    block rounded-xl border border-black/20 dark:border-white/20
    p-4 text-left
    shadow-md dark:shadow-white/10
    transition-all duration-200
  `;

  const interactiveClasses = `
    hover:-translate-y-0.5
    hover:shadow-lg dark:hover:shadow-white/20
    active:translate-y-0
    active:shadow-sm
  `;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClasses} ${interactiveClasses}`}
    >
      {content}
    </a>
  ) : (
    <div className={baseClasses}>{content}</div>
  );    
};

export default function InfoGrid() {
  return (
    <div id="info" className="scroll-mt-24">
      <Card>

        {/* Short about */}
        <div
          className="
            mt-6 rounded-xl border border-black/20 dark:border-white/20
            p-4 shadow-md dark:shadow-white/10
          "
        >
          <div className="text-sm font-bold">About (short)</div>
          <div className="mt-2 text-sm leading-relaxed opacity-80">
            I focus on building modern React applications with clean UI,
            thoughtful spacing, and maintainable code. I value simplicity,
            performance, and clarity.
          </div>
        </div>
      </Card>
    </div>
  );
}
