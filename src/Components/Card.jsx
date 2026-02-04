export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/20 dark:border-white/20 " +
        "bg-white dark:bg-black shadow-md dark:shadow-white/10 " +
        "p-6 " +
        className
      }
    >
      {children}
    </div>
  );
}
