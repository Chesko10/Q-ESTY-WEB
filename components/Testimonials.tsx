import { Star } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
  {
    name: "Hotel Mirador",
    hotel: "Gerente general",
    quote:
      "Desde que ponemos el QR de Güesty en las habitaciones, casi no recibimos llamadas preguntando por el wifi o los horarios del desayuno.",
  },
  {
    name: "Casa Viajera Hostel",
    hotel: "Fundadora",
    quote:
      "Nuestros huéspedes piden toallas o avisan de una avería directo desde el chat, y mantenimiento lo recibe al instante.",
  },
  {
    name: "Posada del Sol",
    hotel: "Directora de operaciones",
    quote:
      "No tenemos recepción 24 horas, pero desde que usamos Güesty los huéspedes sienten que siempre hay alguien despierto para ayudarlos.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Testimonios"
          title="Alojamientos que ya duermen tranquilos"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delayMs={index * 120}>
              <figure className="card-elevate flex h-full flex-col rounded-[14px] bg-white p-7">
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
