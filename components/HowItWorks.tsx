import { QrCode, MessageCircle, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const steps = [
  {
    icon: QrCode,
    title: "Escanea el QR",
    description:
      "El huésped escanea el código QR de su habitación con la cámara del móvil, sin instalar nada.",
  },
  {
    icon: MessageCircle,
    title: "Pregunta, pide o avisa",
    description:
      "Desde el chat resuelve dudas, pide al restaurante, solicita un late check-out o avisa de una incidencia.",
  },
  {
    icon: CheckCircle2,
    title: "Solo lo importante llega al personal",
    description:
      "Güesty resuelve lo que puede por sí mismo y traslada a recepción o mantenimiento solo lo que de verdad necesita una persona.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo funciona"
          description="De escanear el QR a resolver la duda, en segundos."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 120} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/15">
                <Icon className="h-7 w-7 text-terracotta-dark" strokeWidth={1.75} />
              </div>
              <span className="mt-4 block font-sans text-xs font-bold uppercase tracking-widest text-terracotta">
                Paso {index + 1}
              </span>
              <h3 className="mt-1 font-serif text-xl font-semibold text-brown-dark">
                {title}
              </h3>
              <p className="mt-2 text-brown">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
