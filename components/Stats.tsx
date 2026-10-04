import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

/**
 * Cifras de la sección oscura. Para pasar a datos reales (p. ej. de The
 * Cathedral Hostel), cambia `value`/`label`, pon `estimate: false` y
 * actualiza `footnote` (o déjalo vacío para ocultarlo).
 */
const stats = [
  {
    value: 150,
    prefix: "+",
    suffix: "",
    lead: "",
    label: "consultas resueltas al mes sin pasar por recepción",
    highlight: true,
    estimate: true,
  },
  {
    value: 20,
    prefix: "",
    suffix: " h",
    lead: "Hasta",
    label: "de recepción ahorradas al mes",
    highlight: false,
    estimate: true,
  },
  {
    value: 50,
    prefix: "+",
    suffix: "",
    lead: "",
    label: "recomendaciones locales conectadas a Google Maps",
    highlight: false,
    estimate: false,
  },
];

const footnote = "";

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="mesh-dark section-y relative overflow-hidden text-white"
    >
      <div className="container-page">
        <SectionHeader
          id="stats-title"
          align="left"
          tone="dark"
          eyebrow="Valor generado"
          title="Menos teléfono en recepción. Más tiempo para tus huéspedes."
        />

        <dl className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20 lg:gap-5">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delayMs={index * 100}
              className="flex flex-col gap-4 rounded-inner bg-night-2/70 p-7 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)] lg:p-8"
            >
              <dt className="order-2 text-[0.9375rem] text-on-dark-muted">
                {stat.label}
                {stat.estimate && footnote && <span aria-hidden> *</span>}
              </dt>
              <dd className="order-1 flex items-baseline gap-3">
                {stat.lead && (
                  <span className="text-[1.125rem] font-medium text-on-dark-muted">
                    {stat.lead}
                  </span>
                )}
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className={`font-display text-[clamp(3.5rem,7vw,5.5rem)] leading-none font-bold tracking-[-0.035em] ${
                    stat.highlight ? "text-brand-bright" : "text-white"
                  }`}
                />
              </dd>
            </Reveal>
          ))}
        </dl>

        {footnote && (
          <p className="mt-6 text-[0.8125rem] text-on-dark-muted">* {footnote}</p>
        )}
      </div>
    </section>
  );
}
