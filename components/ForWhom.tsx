import { Building2, Heart, KeyRound, Landmark } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const audiences = [
  {
    icon: Building2,
    title: "Hoteles",
    description:
      "Da a tus huéspedes respuestas al instante y libera a tu equipo de las preguntas repetitivas, sin importar cuántas habitaciones gestiones.",
  },
  {
    icon: Heart,
    title: "Hostales",
    description:
      "Ofrece una experiencia más cuidada a tus huéspedes sin necesidad de aumentar la plantilla.",
  },
  {
    icon: KeyRound,
    title: "Apartamentos turísticos",
    description:
      "Varias propiedades distintas, cada una con su propio wifi, normas y equipamiento — todo centralizado en un mismo asistente.",
  },
  {
    icon: Landmark,
    title: "Cadenas y alojamientos independientes",
    description:
      "Tanto si gestionas un único alojamiento como una cadena con varias propiedades, Qüesty se adapta a tu forma de trabajar.",
  },
];

export default function ForWhom() {
  return (
    <section id="who" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Para quién es"
          title="Pensado para cualquier tipo de alojamiento"
          description="Desde un hostal con encanto hasta una cadena hotelera con varias propiedades — Qüesty se adapta a la forma de trabajar de tu equipo."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, description }, index) => (
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
