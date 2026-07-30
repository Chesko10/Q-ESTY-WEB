import { Clock, MessageSquareOff, HeartHandshake, Zap, QrCode } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const benefits = [
  {
    icon: Clock,
    title: "Disponibilidad total",
    description: 'Nunca hay un "no hay nadie para atenderte" a las 2 de la madrugada.',
  },
  {
    icon: MessageSquareOff,
    title: "Menos interrupciones al personal",
    description:
      "Reduce las llamadas y preguntas repetitivas que hoy consumen el tiempo de tu equipo.",
  },
  {
    icon: HeartHandshake,
    title: "Mejor experiencia, sin más plantilla",
    description:
      "Tus huéspedes se sienten atendidos en todo momento, sin que tengas que contratar a nadie más.",
  },
  {
    icon: Zap,
    title: "Fácil de poner en marcha",
    description:
      "No necesitas integrarlo con un PMS ni con sistemas complejos para empezar a usarlo.",
  },
  {
    icon: QrCode,
    title: "Sin apps que instalar",
    description:
      "Tus huéspedes acceden escaneando el QR de su habitación; nada que descargar ni recordar.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-sand bg-cream-dark px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Por qué Güesty"
          title='La alternativa a "no hay nadie en recepción"'
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 90}>
              <div className="card-elevate h-full rounded-[14px] bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/15">
                  <Icon
                    className="h-5 w-5 text-terracotta-dark"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-brown-dark">
                  {title}
                </h3>
                <p className="mt-2 text-brown">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
