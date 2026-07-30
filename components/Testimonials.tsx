import { Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

// Contenido de ejemplo — sustituir por testimonios reales de clientes.
const testimonials = [
  {
    name: "Marta Alonso",
    hotel: "Hostal Puerta del Sol",
    quote:
      "Desde que instalamos Güesty, las llamadas a recepción por la noche casi han desaparecido. Nuestros huéspedes lo adoran.",
  },
  {
    name: "Javier Moreno",
    hotel: "Hotel Rincón del Bosque",
    quote:
      "Lo que más valoramos es el soporte multi-idioma: ya no perdemos tiempo explicando lo mismo en tres idiomas distintos.",
  },
  {
    name: "Laura Fernández",
    hotel: "Hostal Casa Vieja",
    quote:
      "La configuración fue cuestión de minutos y el equipo empezó a usarlo sin ninguna formación. Una pasada.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen otros hoteleros"
          description="Historias reales de equipos que ya han incorporado Güesty a su día a día."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delayMs={index * 120}>
              <figure className="card-elevate flex h-full flex-col rounded-2xl bg-cream-dark p-7">
                <div className="flex gap-0.5 text-amber" aria-hidden>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-brown">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brown/10 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta font-serif font-bold text-cream">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-brown-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brown/70">{testimonial.hotel}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
