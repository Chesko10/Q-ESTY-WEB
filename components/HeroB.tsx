import Image from "next/image";
import Button from "./ui/Button";
import phoneLanguages from "@/public/images/movil-idiomas.jpg";

/** Variante de prueba del hero: mismo diseño sobre fondo granate oscuro. */
export default function HeroB() {
  return (
    <section id="top" className="mesh-hero-dark relative overflow-hidden">
      <div className="container-page grid items-center gap-16 pt-32 pb-24 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pt-44 lg:pb-32">
        <div className="flex flex-col items-start">
          <span
            className="animate-fade-in-up inline-flex items-center gap-2 rounded-control bg-white/8 px-3 py-2 text-[0.8125rem] font-medium text-on-dark-muted shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-ok shadow-[0_0_0_3px_rgb(34_197_94/0.22)]" />
            Activo 24 h · sin apps
          </span>

          <h1
            className="animate-fade-in-up text-display mt-7 text-white"
            style={{ animationDelay: "90ms" }}
          >
            Tu anfitrión virtual,{" "}
            <span className="text-brand">siempre despierto.</span>
          </h1>

          <p
            className="animate-fade-in-up text-lead mt-7 max-w-[34rem] text-on-dark-muted"
            style={{ animationDelay: "180ms" }}
          >
            Tus huéspedes escanean el QR de la habitación y resuelven sus
            dudas al momento, en su idioma y sin llamar a recepción.
          </p>

          <div
            className="animate-fade-in-up mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <Button href="#demo" arrow>
              Solicitar demo
            </Button>
            <Button href="#how" variant="ghostDark">
              Cómo funciona
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in-up relative mx-auto w-full max-w-[360px] lg:max-w-[400px]"
          style={{ animationDelay: "200ms" }}
        >
          <div className="animate-float">
            <Image
              src={phoneLanguages}
              alt="Un huésped sostiene su móvil con la pantalla de Qüesty de The Cathedral Hostel para elegir idioma: español, inglés, francés, alemán, italiano y portugués."
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 400px, 360px"
              className="h-auto w-full rounded-card shadow-[0_32px_64px_-24px_rgb(0_0_0/0.7),0_0_0_1px_rgb(255_255_255/0.06)]"
            />
          </div>

          <div className="absolute top-[16%] -left-3 flex items-center gap-2 rounded-inner bg-white/90 px-4 py-3 text-[0.8125rem] font-semibold text-ink shadow-medium backdrop-blur-md sm:-left-10">
            <span className="font-display text-lg leading-none font-bold text-brand">
              6
            </span>
            idiomas
          </div>
          <div className="absolute -right-3 bottom-[14%] flex items-center gap-2 rounded-inner bg-white/90 px-4 py-3 text-[0.8125rem] font-semibold text-ink shadow-medium backdrop-blur-md sm:-right-8">
            <span className="h-[7px] w-[7px] rounded-full bg-ok" />
            Sin descargar apps
          </div>
        </div>
      </div>
    </section>
  );
}
