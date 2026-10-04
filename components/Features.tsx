import {
  CalendarDays,
  Clock,
  Languages,
  Luggage,
  MapPin,
  QrCode,
  TriangleAlert,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const languages = ["Español", "English", "Français", "Deutsch", "Italiano", "Português"];

function Icon({ icon: IconComponent, tone = "light" }: { icon: LucideIcon; tone?: "light" | "brand" }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-inner ${
        tone === "brand" ? "bg-white/15 text-white" : "bg-blush-100 text-brand-dark"
      }`}
    >
      <IconComponent className="h-5 w-5" strokeWidth={2} aria-hidden />
    </span>
  );
}

const card =
  "card-hover flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft";

export default function Features() {
  return (
    <section id="features" className="section-y scroll-mt-20 bg-canvas">
      <div className="container-page">
        <SectionHeader
          eyebrow="Funciones"
          title="Todo lo que tu huésped pregunta, resuelto."
          description="Qüesty conoce tu alojamiento y tu ciudad. Responde con tu información real, a cualquier hora."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Multilenguaje — tarjeta principal */}
          <Reveal className="md:col-span-2 lg:row-span-2">
            <div className={`${card} justify-between gap-10 bg-[linear-gradient(160deg,#fff_40%,var(--color-blush-50))] lg:p-10`}>
              <div>
                <Icon icon={Languages} />
                <h3 className="mt-6 font-display text-[2rem] leading-[1.1] font-bold tracking-[-0.03em] text-ink">
                  Habla el idioma de cada huésped
                </h3>
                <p className="mt-3 max-w-[42ch] text-ink-muted">
                  El huésped elige su idioma al abrir el chat y Qüesty le
                  responde en él durante toda la conversación.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3" aria-label="Idiomas disponibles">
                {languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-control border border-line bg-white px-4 py-3 text-center text-[0.9375rem] font-medium text-ink"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* WiFi */}
          <Reveal delayMs={80}>
            <div className={card}>
              <Icon icon={Wifi} />
              <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">WiFi al momento</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">
                Nombre de la red y contraseña, sin buscar el cartel.
              </p>
              <dl className="mt-auto grid gap-1.5 pt-6 font-mono text-[0.8125rem]">
                <div className="flex justify-between gap-3 rounded-[10px] bg-canvas px-3 py-2">
                  <dt className="text-ink-subtle">Red</dt>
                  <dd className="truncate text-ink">Hostal_Invitados</dd>
                </div>
                <div className="flex justify-between gap-3 rounded-[10px] bg-canvas px-3 py-2">
                  <dt className="text-ink-subtle">Clave</dt>
                  <dd className="text-ink">••••••••</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Check-in / check-out */}
          <Reveal delayMs={160}>
            <div className={card}>
              <Icon icon={Clock} />
              <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">Check-in y check-out</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">
                Horarios de entrada y salida, y las opciones de late check-out
                con sus precios.
              </p>
            </div>
          </Reveal>

          {/* Incidencias */}
          <Reveal delayMs={80} className="md:col-span-2">
            <div className={`${card} gap-6 sm:flex-row sm:items-center`}>
              <div className="sm:flex-1">
                <Icon icon={TriangleAlert} />
                <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">Incidencias, con prioridad</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">
                  El huésped avisa desde el chat y Qüesty detecta cuáles son
                  urgentes para que lleguen antes a tu equipo.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:w-[46%]" aria-hidden>
                <div className="self-end rounded-inner rounded-br-[4px] bg-ink px-3.5 py-2.5 text-[0.8125rem] leading-snug text-white">
                  No sale agua caliente en la ducha
                </div>
                <div className="flex items-center gap-2 self-start rounded-inner rounded-bl-[4px] border border-line bg-white px-3.5 py-2.5 text-[0.8125rem] leading-snug text-ink">
                  <span className="rounded-[6px] bg-brand px-1.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-white uppercase">
                    Urgente
                  </span>
                  Aviso enviado a recepción
                </div>
              </div>
            </div>
          </Reveal>

          {/* Recomendaciones */}
          <Reveal className="md:col-span-2">
            <div className={`${card} gap-6 sm:flex-row sm:items-center`}>
              <div className="sm:flex-1">
                <Icon icon={MapPin} />
                <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">Recomendaciones locales</h3>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">
                  Restaurantes con tipo de cocina y precio, museos, parques y
                  ocio nocturno, con enlace directo a Google Maps.
                </p>
              </div>
              <ul className="flex flex-col gap-2 sm:w-[46%]" aria-hidden>
                {[
                  { name: "Cocina local", meta: "€€ · 5 min a pie" },
                  { name: "Museo y casco antiguo", meta: "10 min a pie" },
                  { name: "Terrazas de noche", meta: "€ · 8 min a pie" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-control bg-canvas px-3.5 py-2.5 text-[0.8125rem]"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-ink">{item.name}</span>
                      <span className="text-ink-subtle">{item.meta}</span>
                    </span>
                    <span className="shrink-0 font-medium text-brand">Maps ↗</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Eventos */}
          <Reveal delayMs={80}>
            <div className={card}>
              <Icon icon={CalendarDays} />
              <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">Eventos de la ciudad</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">
                Los planes del momento en tu ciudad: fiestas locales, conciertos, ferias y eventos de temporada.
              </p>
            </div>
          </Reveal>

          {/* Servicios del alojamiento */}
          <Reveal delayMs={160}>
            <div className={card}>
              <Icon icon={Luggage} />
              <h3 className="text-h3 mt-6 text-[1.25rem] text-ink">Servicios del alojamiento</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-muted">
                Consigna de equipaje, limpieza, toallas y lavanderías cercanas.
              </p>
            </div>
          </Reveal>

          {/* 24/7 sin apps */}
          <Reveal className="md:col-span-2 lg:col-span-4">
            <div className="mesh-brand card-hover flex flex-col gap-6 rounded-card p-7 text-white shadow-brand sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-9">
              <div className="flex items-center gap-5">
                <Icon icon={QrCode} tone="brand" />
                <div>
                  <h3 className="font-display text-[1.5rem] leading-tight font-bold tracking-[-0.02em] lg:text-[1.75rem]">
                    Disponible 24/7, sin descargar ninguna app
                  </h3>
                  <p className="mt-1 text-white">
                    Basta con escanear el QR de la habitación con la cámara del móvil.
                  </p>
                </div>
              </div>
              <span className="font-display text-[3rem] leading-none font-bold tracking-[-0.035em] text-white/95 sm:text-[3.5rem]">
                24/7
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
