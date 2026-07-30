import {
  CircleHelp,
  Clock,
  UtensilsCrossed,
  Wrench,
  MapPin,
  QrCode,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const features = [
  {
    icon: CircleHelp,
    title: "Dudas del alojamiento al instante",
    description:
      "Aire acondicionado, caja fuerte, horarios de piscina y desayuno, normas de la casa, red wifi... Qüesty resuelve las preguntas más repetidas al instante y en el idioma del huésped.",
  },
  {
    icon: Clock,
    title: "Late check-out sin llamadas",
    description:
      "El huésped pide ampliar su salida desde el chat. Qüesty comprueba si hay disponibilidad real antes de confirmar, o propone alternativas si no la hay.",
  },
  {
    icon: UtensilsCrossed,
    title: "Pedidos al restaurante",
    description:
      "Consulta el menú y hace su comanda sin bajar ni llamar a recepción — el pedido se gestiona para que llegue directo a la habitación.",
  },
  {
    icon: Wrench,
    title: "Gestión de incidencias",
    description:
      "Distingue una duda que puede resolver solo de una avería real. Si hace falta una persona, avisa automáticamente a recepción o mantenimiento.",
  },
  {
    icon: MapPin,
    title: "Recomendaciones locales",
    description:
      "Restaurantes, bares y planes cerca del alojamiento, adaptados a la hora del día — de un brunch de domingo a un plan si llueve.",
  },
  {
    icon: QrCode,
    title: "Acceso sin fricción",
    description:
      "Sin apps que instalar: se abre escaneando el QR de la habitación, disponible 24/7 y en varios idiomas para huéspedes internacionales.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Funciones"
          title="Todo lo que Qüesty hace por tu alojamiento"
          description="Pensado para el día a día real de un hotel pequeño, un hostal o varios apartamentos turísticos."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
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
