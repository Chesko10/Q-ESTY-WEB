type SectionDividerProps = {
  fromColor: string;
  toColor: string;
  flip?: boolean;
};

export default function SectionDivider({
  fromColor,
  toColor,
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="relative h-12 w-full overflow-hidden sm:h-20"
      style={{ backgroundColor: fromColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,64 C320,130 1120,-10 1440,64 L1440,120 L0,120 L0,64 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
