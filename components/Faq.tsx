"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const questions = [
  {
    question: "¿Necesito instalar algo en mi alojamiento?",
    answer:
      "No tienes que hacer nada. Vamos a tu alojamiento y colocamos nosotros mismos los soportes con el código QR en cada habitación, listos para que tus huéspedes empiecen a usarlo. En la Región de Murcia la instalación es presencial; si estás en otra zona, escríbenos y lo vemos.",
  },
  {
    question: "¿Qué pasa si el bot no sabe responder algo?",
    answer:
      "Si Qüesty detecta que necesita ayuda humana, avisa automáticamente a tu equipo para que lo resuelva; el huésped nunca se queda sin respuesta.",
  },
  {
    question: "¿En qué idiomas funciona?",
    answer:
      "En español, inglés, francés, alemán, italiano y portugués. El huésped elige el suyo al abrir el chat.",
  },
  {
    question: "¿Necesito un sistema de gestión (PMS) para usarlo?",
    answer:
      "No. Qüesty funciona de forma independiente, sin necesidad de integrarlo con un PMS ni otros sistemas complejos.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Solicita una demo desde el formulario y te ayudamos a configurar el QR con la información real de tu alojamiento.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y scroll-mt-20 bg-canvas">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            align="left"
            eyebrow="FAQ"
            title="Preguntas frecuentes."
            description="¿Tienes otra duda? Escríbenos desde el formulario de abajo."
          />
        </div>

        <div className="flex flex-col gap-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Reveal key={item.question} delayMs={index * 60}>
                <div
                  className={`rounded-inner bg-white ring-1 transition-shadow duration-300 ${
                    isOpen ? "shadow-soft ring-line" : "ring-line/70"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 rounded-inner px-6 py-5 text-left font-semibold text-ink focus-visible:outline-2 focus-visible:outline-brand"
                    >
                      {item.question}
                      <span
                        aria-hidden
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-out-soft ${
                          isOpen ? "rotate-45 bg-brand text-white" : "bg-blush-50 text-brand"
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out-soft ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[60ch] px-6 pb-6 text-ink-muted">{item.answer}</p>
                    </div>
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
