export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="border border-black dark:border-white shadow-md dark:shadow-white/10 p-6"
    >
      {title ? <h2 className="text-xl font-bold">{title}</h2> : null}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </section>
  );
}
