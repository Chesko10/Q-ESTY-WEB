import Button from "./ui/Button";
import ChatMockup from "./ui/ChatMockup";

const heroMessages = [
  { from: "guest" as const, text: "¿Hasta qué hora sirven el desayuno?" },
  { from: "bot" as const, text: "El desayuno es de 7:30 a 10:30 en la planta baja 🥐" },
  { from: "guest" as const, text: "El aire acondicionado de mi habitación no funciona" },
  { from: "bot" as const, text: "Aviso enviado a mantenimiento", confirm: true },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
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
            Para hoteles y hostales
          </span>

          <h1
            className="animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-brown-dark text-balance sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Güesty
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-xl text-lg text-brown sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            El asistente virtual que atiende a tus huéspedes las 24 horas,
            escaneando un simple código QR desde su habitación. Sin llamadas a
            recepción, sin esperas, sin descargas.
          </p>

          <div
            className="animate-fade-in-up mt-10"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="#contacto" className="btn-pulse">
              Solicitar demo
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in-up hidden lg:block"
          style={{ animationDelay: "260ms" }}
        >
          <ChatMockup
            messages={heroMessages}
            animated
            floatLabel="Respuesta al instante"
          />
        </div>
      </div>
    </section>
  );
}
