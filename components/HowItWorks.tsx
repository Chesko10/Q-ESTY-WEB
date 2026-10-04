import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import qrCard from "@/public/images/qr-mesilla.jpg";

const steps = [
  {
    title: "Escanea",
    description:
      "El huésped apunta la cámara al QR de su habitación. Se abre al momento en el navegador, sin instalar nada.",
  },
  {
    title: "Pregunta",
    description:
      "Escribe en su idioma: el wifi, el horario de check-out, dónde cenar o que no funciona el aire acondicionado.",
  },
  {
    title: "Listo",
    description:
      "Qüesty responde con la información real de tu alojamiento. Si algo necesita a una persona, avisa a tu equipo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-y scroll-mt-20">
      <div className="container-page grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none">
          <Image
            src={qrCard}
            alt="Tarjeta de Qüesty con código QR en un soporte de metacrilato sobre la mesilla de una habitación de The Cathedral Hostel."
            placeholder="blur"
            sizes="(min-width: 1200px) 548px, (min-width: 1024px) 45vw, 448px"
            className="h-auto w-full rounded-card shadow-float"
          />
        </Reveal>

        <div className="lg:pt-8">
          <SectionHeader
            align="left"
            eyebrow="Cómo funciona"
            title="Escanear, preguntar y listo."
            description="Una tarjeta en la mesilla es todo lo que necesita tu huésped."
          />

          <ol className="mt-14 flex flex-col">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delayMs={index * 100}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-8 last:border-b"
              >
                <span className="font-display text-[2.5rem] leading-none font-bold tracking-[-0.03em] text-brand tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-h3 text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-[46ch] text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
