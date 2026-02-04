import Card from "./Card";

const ButtonItem = ({ label, value, href }) => {
  const base =
    "block rounded-xl border border-black/20 dark:border-white/20 p-4 " +
    "shadow-md dark:shadow-white/10 transition-all duration-200";

  const interactive =
    "hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-white/20 " +
    "active:translate-y-0 active:shadow-sm";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${interactive}`}
    >
      <div className="font-semibold text-sm">{label}</div>
      <div className="mt-1 text-sm opacity-80">{value}</div>
    </a>
  ) : (
    <div className={base}>
      <div className="font-semibold text-sm">{label}</div>
      <div className="mt-1 text-sm opacity-80">{value}</div>
    </div>
  );
};

export default function Footer() {
  return (
    <div id="contact" className="scroll-mt-24">
      <Card>
        <div className="text-lg font-bold text-center">Contact</div>

        {/* CONTACT GRID */}
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {/* Email */}
          <ButtonItem
            label="Email"
            value="Josh.rtablon@gmail.com"
            href="mailto:Josh.rtablon@gmail.com"
          />

          {/* Links */}
          <div className="space-y-3">
            <ButtonItem
              label="GitHub"
              value="JoshuaPioo"
              href="https://github.com/JoshuaPioo"
            />
            <ButtonItem
              label="LinkedIn"
              value="Joshua Tablon"
              href="https://www.linkedin.com/in/joshua-tablon-profile/"
            />
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} • Joshua Tablon • Web Developer
        </div>
      </Card>
    </div>
  );
}
