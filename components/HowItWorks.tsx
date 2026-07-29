import { QrCode, MessageCircle, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";

const steps = [
  {
    icon: QrCode,
    title: "Escanea el QR",
    description:
      "El huésped escanea el código QR disponible en su habitación o en zonas comunes.",
  },
  {
    icon: MessageCircle,
    title: "Habla con Güesty",
    description:
      "Se abre una conversación instantánea, sin descargar ninguna app ni crear cuentas.",
  },
  {
    icon: CheckCircle2,
    title: "Resuelve al instante",
    description:
      "Recibe la respuesta o gestiona su incidencia al momento, a cualquier hora del día.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-brown-dark text-balance">
            Así de simple funciona
          </h2>
          <p className="mt-4 text-lg text-brown">
            Ninguna curva de aprendizaje, ni para tu equipo ni para tus
            huéspedes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delayMs={index * 120} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
                <Icon className="h-7 w-7 text-sage-dark" strokeWidth={1.75} />
              </div>
              <span className="mt-4 block font-serif text-sm italic text-terracotta">
                Paso {index + 1}
              </span>
              <h3 className="mt-1 font-serif text-xl font-semibold text-brown-dark">
                {title}
              </h3>
              <p className="mt-2 text-brown">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
