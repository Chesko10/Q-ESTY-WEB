import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

// El primero se muestra destacado.
const testimonials = [
  {
    name: "Posada del Sol",
    role: "Directora de operaciones",
    quote:
      "No tenemos recepción 24 horas, pero desde que usamos Qüesty los huéspedes sienten que siempre hay alguien despierto para ayudarlos.",
  },
  {
    name: "Hotel Mirador",
    role: "Gerente general",
    quote:
      "Desde que ponemos el QR de Qüesty en las habitaciones, casi no recibimos llamadas preguntando por el wifi o los horarios del desayuno.",
  },
  {
    name: "Casa Viajera Hostel",
    role: "Fundadora",
    quote:
      "Nuestros huéspedes piden toallas o avisan de una avería directo desde el chat, y mantenimiento lo recibe al instante.",
  },
];

function Author({ name, role }: { name: string; role: string }) {
  return (
    <figcaption className="flex items-center gap-3">
      <span
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white"
      >
        {name.charAt(0)}
      </span>
      <span>
        <span className="block font-semibold text-ink">{name}</span>
        <span className="block text-[0.875rem] text-ink-subtle">{role}</span>
      </span>
    </figcaption>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="section-y scroll-mt-20 bg-canvas">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonios" title="Alojamientos que ya duermen tranquilos." />

        <div className="mt-16 grid gap-4 lg:grid-cols-5 lg:gap-5">
          <Reveal className="lg:col-span-3">
            <figure className="flex h-full flex-col justify-between gap-12 rounded-card bg-white p-8 shadow-soft ring-1 ring-line sm:p-12">
              <div>
                <Quote className="h-9 w-9 fill-brand text-brand" strokeWidth={0} aria-hidden />
                <blockquote className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.25] font-semibold tracking-[-0.025em] text-balance text-ink">
                  {featured.quote}
                </blockquote>
              </div>
              <Author name={featured.name} role={featured.role} />
            </figure>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2 lg:gap-5">
            {rest.map((testimonial, index) => (
              <Reveal key={testimonial.name} delayMs={(index + 1) * 100}>
                <figure className="card-hover flex h-full flex-col justify-between gap-8 rounded-card bg-white p-8 shadow-soft ring-1 ring-line">
                  <blockquote className="text-ink-muted">
                    <Quote className="mb-4 h-6 w-6 fill-blush-300 text-blush-300" strokeWidth={0} aria-hidden />
                    {testimonial.quote}
                  </blockquote>
                  <Author name={testimonial.name} role={testimonial.role} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
