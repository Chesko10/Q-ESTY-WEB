import Image from "next/image";
import { ChartColumn, Clock, Palette, Zap, type LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import dashboard from "@/public/images/panel-portatil.jpg";

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ChartColumn,
    title: "Datos reales cada mes",
    description:
      "Un panel con las conversaciones, los mensajes y las consultas que Qüesty resuelve sin pasar por recepción.",
  },
  {
    icon: Clock,
    title: "Menos interrupciones",
    description:
      "Tu equipo deja de repetir el wifi y los horarios, y se centra en lo que necesita a una persona.",
  },
  {
    icon: Palette,
    title: "Con la voz de tu marca",
    description:
      "Las respuestas se adaptan al tono de tu alojamiento, y las tarjetas QR llevan tu logo.",
  },
  {
    icon: Zap,
    title: "Sin integraciones",
    description:
      "No hace falta conectarlo a tu PMS ni cambiar nada de cómo trabajáis hoy.",
  },
];

const lodgingTypes = ["Hoteles", "Hostales", "Apartamentos turísticos", "Cadenas"];

export default function ForHotels() {
  return (
    <section id="hotels" className="section-y scroll-mt-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Para anfitriones"
          title="Sabrás cuánto trabajo te quita Qüesty."
          description="Cada mes ves qué preguntan tus huéspedes y cuántas consultas se resuelven sin que nadie tenga que atenderlas."
        />

        <Reveal delayMs={100} className="mt-16 lg:mt-20">
          <Image
            src={dashboard}
            alt="Portátil con el panel de estadísticas de Qüesty de The Cathedral Hostel: 206 consultas resueltas sin pasar por recepción, conversaciones del mes y evolución diaria de mensajes."
            placeholder="blur"
            sizes="(min-width: 1200px) 1136px, 100vw"
            className="h-auto w-full rounded-card shadow-float"
          />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 80}>
              <span className="flex h-10 w-10 items-center justify-center rounded-inner bg-blush-100 text-brand-dark">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="text-h3 mt-5 text-[1.25rem] text-ink">{title}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">{description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-6">
          <span className="text-[0.9375rem] font-medium text-ink-subtle">
            Funciona en
          </span>
          <ul className="flex flex-wrap gap-2">
            {lodgingTypes.map((type) => (
              <li
                key={type}
                className="rounded-control bg-canvas px-3.5 py-2 text-[0.9375rem] font-medium text-ink"
              >
                {type}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
