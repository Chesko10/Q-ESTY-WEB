"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircleHeart, ShieldCheck, Star, type LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

/** Reseñas: Qüesty pide la valoración y lleva a los huéspedes contentos a Google. */

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageCircleHeart,
    title: "Pregunta en el momento justo",
    description:
      "Cuando ya le ha resuelto varias dudas al huésped, o antes del check-out, Qüesty le pregunta qué tal su estancia, en su idioma y desde el mismo chat. Solo una vez por estancia, para no molestar.",
  },
  {
    icon: Star,
    title: "Si ha ido bien, a Google",
    description:
      "Al huésped contento le invita a dejar su reseña en Google o Booking con un solo toque.",
  },
  {
    icon: ShieldCheck,
    title: "Si algo ha fallado, a ti primero",
    description:
      "Las opiniones negativas te llegan en privado para que puedas arreglarlo antes de que acaben publicadas.",
  },
];

type Scenario = "happy" | "unhappy";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-6 w-6 ${
            index < count ? "fill-amber-400 text-amber-400" : "fill-line text-line"
          }`}
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] self-start rounded-inner rounded-bl-[4px] border border-line bg-white px-3.5 py-2.5 text-[0.875rem] leading-snug text-ink">
      {children}
    </div>
  );
}

function GuestBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[85%] self-end rounded-inner rounded-br-[4px] bg-ink px-3.5 py-2.5 text-[0.875rem] leading-snug text-white">
      {children}
    </div>
  );
}

function PhoneChat({ scenario }: { scenario: Scenario }) {
  const happy = scenario === "happy";

  return (
    <div className="mx-auto w-full max-w-[22rem] rounded-[2.25rem] bg-night p-3 shadow-float">
      <div className="flex min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] bg-canvas">
        <div className="flex items-center gap-3 border-b border-line bg-white px-5 py-4">
          <Image
            src="/images/cathedral-hostel-logo.png"
            alt="The Cathedral Hostel"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <div className="leading-tight">
            <p className="text-[0.9375rem] font-semibold text-ink">The Cathedral Hostel</p>
            <p className="text-[0.75rem] text-ink-subtle">Habitación 12</p>
          </div>
        </div>

        {/* key fuerza el remontaje para repetir la animación al cambiar de caso */}
        <div key={scenario} className="flex flex-1 flex-col gap-3 p-4">
          <div className="animate-fade-in-up flex flex-col gap-3" style={{ animationDelay: "0ms" }}>
            <BotBubble>
              ¡Hola, Laura! Tu check-out es mañana a las 11:00. ¿Qué tal tu estancia?
            </BotBubble>
            <div className="self-start rounded-inner border border-line bg-white px-3.5 py-3">
              <Stars count={happy ? 5 : 2} />
            </div>
          </div>

          {happy ? (
            <>
              <div className="animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                <GuestBubble>¡Genial! El personal, de diez.</GuestBubble>
              </div>
              <div className="animate-fade-in-up flex flex-col gap-2" style={{ animationDelay: "500ms" }}>
                <BotBubble>
                  ¡Qué alegría! ¿Nos ayudas contándolo en Google? Solo te llevará un minuto.
                </BotBubble>
                <span className="self-start rounded-control bg-brand px-4 py-2.5 text-[0.8125rem] font-semibold text-white shadow-brand">
                  Dejar mi reseña en Google ↗
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                <GuestBubble>El aire acondicionado hacía mucho ruido.</GuestBubble>
              </div>
              <div className="animate-fade-in-up flex flex-col gap-2" style={{ animationDelay: "500ms" }}>
                <BotBubble>
                  Sentimos mucho la molestia. Ya se lo he contado a recepción para que lo revisen.
                </BotBubble>
                <span className="flex items-center gap-2 self-start rounded-control border border-line bg-white px-3 py-2 text-[0.8125rem] text-ink">
                  <span className="rounded-[6px] bg-ink px-1.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-white uppercase">
                    Privado
                  </span>
                  Opinión enviada a recepción
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const scenarios: { id: Scenario; label: string }[] = [
  { id: "happy", label: "Huésped contento" },
  { id: "unhappy", label: "Algo ha fallado" },
];

export default function ReviewsBoost() {
  const [scenario, setScenario] = useState<Scenario>("happy");

  return (
    <section id="reviews" className="section-y scroll-mt-20 bg-canvas">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Reseñas"
            title="Más reseñas de 5 estrellas, sin pedirlas una a una."
            description="Qüesty le pregunta al huésped qué tal su estancia en el mejor momento: después de ayudarle con varias consultas o justo antes de irse. Los contentos acaban en Google; los que no, te lo cuentan a ti primero."
          />

          <ol className="mt-12 flex flex-col">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <Reveal
                as="li"
                key={title}
                delayMs={index * 100}
                className="flex gap-5 border-t border-line py-6 last:border-b"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-inner bg-blush-100 text-brand-dark">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-h3 text-[1.25rem] text-ink">{title}</h3>
                  <p className="mt-1.5 max-w-[46ch] text-[0.9375rem] text-ink-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delayMs={120} className="flex flex-col items-center gap-6">
          <div
            role="tablist"
            aria-label="Ejemplo de conversación"
            className="inline-flex rounded-control bg-white p-1 shadow-soft ring-1 ring-line"
          >
            {scenarios.map(({ id, label }) => {
              const active = scenario === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setScenario(id)}
                  className={`rounded-[9px] px-4 py-2 text-[0.875rem] font-semibold transition-colors duration-200 ${
                    active ? "bg-brand text-white" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <PhoneChat scenario={scenario} />
        </Reveal>
      </div>
    </section>
  );
}
