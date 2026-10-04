import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  id?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  id,
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";
  const dark = tone === "dark";

  return (
    <Reveal className={alignClass}>
      <span className={`text-eyebrow ${dark ? "text-brand-bright" : "text-brand"}`}>
        {eyebrow}
      </span>
      <h2 id={id} className={`text-h2 mt-4 ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`text-lead mt-5 ${dark ? "text-on-dark-muted" : "text-ink-muted"} ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
