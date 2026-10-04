import { Check } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./ui/Reveal";

const reassurances = [
  "Te contactamos en breve",
  "Demo con la información de tu alojamiento",
  "Sin compromiso",
];

export default function Contact() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="scroll-mt-20 px-3 py-3 sm:px-4 sm:py-4">
      <div className="mesh-brand overflow-hidden rounded-card">
        <div className="container-page section-y grid items-center gap-14 text-white lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <span className="text-eyebrow text-white">Empieza hoy</span>
            <h2 id="demo-title" className="text-display mt-5 text-[clamp(2.5rem,5vw,4.5rem)] text-white">
              Dale a tu recepción un descanso.
            </h2>
            <p className="text-lead mt-6 max-w-[34rem] text-white">
              Cuéntanos sobre tu alojamiento y te enseñamos cómo Qüesty
              atendería a tus huéspedes.
            </p>
            <ul className="mt-10 flex flex-col gap-3">
              {reassurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="rounded-card bg-white p-7 text-ink shadow-float sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
