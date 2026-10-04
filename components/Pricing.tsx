import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

const included = [
  "Configuración inicial con la información de tu alojamiento",
  "Respuestas adaptadas al tono y estilo de tu marca",
  "Instalación incluida: colocamos los soportes con QR en cada habitación",
  "Actualización de contenidos cuando cambien horarios, precios o eventos",
  "Panel con estadísticas de uso",
  "Soporte directo",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-y scroll-mt-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Precios"
          title="Un precio pensado para tu alojamiento."
          description="Cada alojamiento es distinto, así que no usamos planes cerrados. Te preparamos un presupuesto según su tamaño y lo que necesites."
        />

        <Reveal delayMs={100} className="mt-16">
          <div className="grid overflow-hidden rounded-card shadow-medium ring-1 ring-line lg:grid-cols-[1.4fr_1fr]">
            <div className="bg-white p-8 sm:p-12">
              <h3 className="text-eyebrow text-ink-subtle">El servicio incluye</h3>
              <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush-100 text-brand-dark">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-[0.9375rem] text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mesh-dark flex flex-col justify-between gap-10 p-8 text-white sm:p-12">
              <div>
                <p className="text-eyebrow text-brand-bright">Precio</p>
                <p className="mt-4 font-display text-[2.75rem] leading-none font-bold tracking-[-0.03em]">
                  A medida
                </p>
                <p className="mt-4 text-on-dark-muted">
                  Cuéntanos cuántas habitaciones tienes y te enviamos el
                  presupuesto, sin compromiso.
                </p>
              </div>
              <Button href="#demo" variant="onDark" arrow className="self-start">
                Pedir presupuesto
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
