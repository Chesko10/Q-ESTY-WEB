import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracotta">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-serif text-4xl font-semibold text-brown-dark text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-brown">{description}</p>
      )}
    </Reveal>
  );
}
