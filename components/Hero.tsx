import Button from "./ui/Button";
import ChatMockup from "./ui/ChatMockup";

const heroMessages = [
  { from: "guest" as const, text: "¿Cuál es la contraseña del wifi?" },
  {
    from: "bot" as const,
    text: "¡Claro! Red: Guesty_Guest — Contraseña: Bienvenido2024. ¿Necesitas algo más?",
  },
  { from: "guest" as const, text: "¿Podrían darme un late check-out?" },
  {
    from: "bot" as const,
    text: "Late check-out confirmado — salida 14:00, sin cargo",
    confirm: true,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-peach to-cream to-60% px-6 pt-28 pb-24 sm:pt-36 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span
            className="animate-fade-in-up mb-6 rounded-full border border-brown/20 bg-cream-dark px-4 py-1.5 text-sm font-medium text-brown"
            style={{ animationDelay: "0ms" }}
          >
            Anfitrión virtual 24h
          </span>

          <h1
            className="animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-brown-dark text-balance sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Tu anfitrión virtual,{" "}
            <span className="text-terracotta">siempre despierto.</span>
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-xl text-lg text-brown sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Güesty vive en el código QR de cada habitación: tus huéspedes
            escanean, preguntan, piden y avisan de incidencias sin descargar{" "}
            <strong className="text-brown-dark">ninguna app</strong> ni
            depender de que haya alguien en recepción.
          </p>

          <div
            className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="#demo" className="btn-pulse">
              Solicitar una demo
              <span aria-hidden className="ml-1.5">
                →
              </span>
            </Button>
            <Button href="#features" variant="outline">
              <span aria-hidden className="mr-1.5 text-terracotta">
                ▶
              </span>
              Ver funciones
            </Button>
          </div>

          <p
            className="animate-fade-in-up mt-6 text-sm text-brown"
            style={{ animationDelay: "380ms" }}
          >
            <strong className="text-brown-dark">Sin apps</strong> — accede
            escaneando el QR de la habitación
          </p>
        </div>

        <div
          className="animate-fade-in-up hidden lg:block"
          style={{ animationDelay: "260ms" }}
        >
          <ChatMockup
            messages={heroMessages}
            animated
            showTyping
            floatLabel="Respuesta instantánea"
          />
        </div>
      </div>
    </section>
  );
}
