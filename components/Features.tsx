import { Wifi, MapPin, Bell, Languages, Clock } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const features = [
  {
    icon: Wifi,
    title: "Información del hostal",
    description:
      "Wifi, horarios de desayuno, check-in y check-out, normas de la casa: todo a mano.",
  },
  {
    icon: MapPin,
    title: "Recomendaciones locales",
    description:
      "Restaurantes, actividades y rincones cercanos que solo un local recomendaría.",
  },
  {
    icon: Bell,
    title: "Gestión de incidencias",
    description:
      "Cada incidencia reportada avisa automáticamente al equipo correspondiente.",
  },
  {
    icon: Languages,
    title: "Soporte multi-idioma",
    description:
      "Conversaciones fluidas en 6 idiomas distintos, sin esfuerzo para el huésped.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description:
      "Ni festivos ni turnos de noche: Güesty siempre está despierto para atender.",
  },
];

export default function Features() {
  return (
    <section className="bg-cream-dark px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Todo lo que necesita tu huésped"
          description="En una sola conversación, sin apps ni menús complicados."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 90}>
              <div className="card-elevate h-full rounded-2xl bg-cream p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/15">
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
