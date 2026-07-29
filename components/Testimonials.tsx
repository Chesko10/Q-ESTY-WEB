import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";

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
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-brown-dark text-balance">
            Lo que dicen otros hoteleros
          </h2>
          <p className="mt-4 text-lg text-brown">
            Historias reales de equipos que ya han incorporado Güesty a su
            día a día.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delayMs={index * 120}>
              <figure className="card-elevate flex h-full flex-col rounded-2xl bg-cream-dark p-7">
                <Quote
                  className="h-6 w-6 text-terracotta"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <blockquote className="mt-4 flex-1 text-brown">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-brown/10 pt-4">
                  <p className="font-serif font-semibold text-brown-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-brown/70">{testimonial.hotel}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
