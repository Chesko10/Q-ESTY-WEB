"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const questions = [
  {
    question: "¿Necesito instalar algo en el hotel?",
    answer:
      "No hace falta ningún sistema nuevo: solo colocas un código QR (te lo enviamos listo para imprimir) en cada habitación.",
  },
  {
    question: "¿Qué pasa si el bot no sabe responder algo?",
    answer:
      "Si Güesty detecta que necesita ayuda humana, avisa automáticamente a tu equipo para que lo resuelva; el huésped nunca se queda sin respuesta.",
  },
  {
    question: "¿En qué idiomas funciona?",
    answer:
      "Güesty detecta el idioma de cada huésped y responde en consecuencia, ideal para alojamientos con huéspedes internacionales.",
  },
  {
    question: "¿Necesito un sistema de gestión (PMS) para usarlo?",
    answer:
      "No. Güesty funciona de forma independiente, sin necesidad de integrarlo con un PMS ni otros sistemas complejos.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Solicita una demo desde el formulario y te ayudamos a configurar el QR con la información real de tu alojamiento.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" />

        <div className="mt-16">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delayMs={index * 60}>
                <div className="border-b border-sand">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-base font-semibold text-brown-dark"
                  >
                    {item.question}
                    <span
                      aria-hidden
                      className={`shrink-0 text-xl text-terracotta transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden text-brown transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="min-h-0 overflow-hidden">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
