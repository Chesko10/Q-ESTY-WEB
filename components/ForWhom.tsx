import { Building2, KeyRound, Heart, XCircle } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const audiences = [
  {
    icon: Building2,
    title: "Hoteles pequeños",
    description:
      "De 10 a 60 habitaciones, sin recepción 24 horas ni personal suficiente para atender todas las dudas al momento.",
  },
  {
    icon: KeyRound,
    title: "Gestores de apartamentos",
    description:
      "Varias propiedades distintas, cada una con su propio wifi, normas y equipamiento — sin poder estar físicamente en todas a la vez.",
  },
  {
    icon: Heart,
    title: "Hostales con encanto",
    description:
      "Alojamientos que quieren dar una experiencia más cuidada a sus huéspedes sin necesidad de aumentar la plantilla.",
  },
];

export default function ForWhom() {
  return (
    <section id="who" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Para quién es"
          title="Pensado para alojamientos pequeños"
          description="Güesty no compite con los grandes sistemas hoteleros: está hecho para quienes no tienen ni recepción 24h ni un equipo enorme."
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

          <Reveal delayMs={audiences.length * 90}>
            <div className="h-full rounded-[14px] bg-cream-dark p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brown/10">
                <XCircle className="h-5 w-5 text-brown" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-brown-dark">
                ¿Para quién no es?
              </h3>
              <p className="mt-2 text-brown">
                Si tu hotel ya tiene un sistema de gestión (PMS) complejo
                integrado con otras soluciones, probablemente necesites algo
                más robusto que Güesty.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
