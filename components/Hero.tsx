import Image from "next/image";
import Button from "./ui/Button";
import RotatingWords from "./ui/RotatingWords";
import heroPhoto from "@/public/images/hero.png";

/** Hero: foto de la tarjeta QR fundida con el fondo oscuro y titular con giro 3D. */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night"
    >
      {/* La foto es vertical: en escritorio ocupa la mitad derecha y se funde
          con el fondo para no ampliarla de más; en móvil cubre toda la pantalla. */}
      <div className="absolute inset-0 -z-20 lg:left-auto lg:w-[60%]">
        <Image
          src={heroPhoto}
          alt=""
          placeholder="blur"
          preload
          quality={90}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[50%_40%] max-lg:scale-105 max-lg:blur-[3px]"
        />
      </div>
      {/* Capa oscura para el contraste del texto blanco */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(20_9_12/0.82)_0%,rgb(20_9_12/0.86)_55%,rgb(20_9_12/0.94)_100%)] lg:bg-[linear-gradient(90deg,var(--color-night)_0%,var(--color-night)_40%,rgb(20_9_12/0.6)_55%,rgb(20_9_12/0.15)_80%,rgb(20_9_12/0.05)_100%)]"
      />

      <div className="container-page pt-32 pb-20 sm:pt-40 lg:pt-36 lg:pb-24">
        <div className="flex max-w-[40rem] flex-col items-start">
          <span
            className="animate-fade-in-up inline-flex items-center gap-2 rounded-control bg-white/10 px-3 py-2 text-[0.8125rem] font-medium text-white/90 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18)] backdrop-blur-md"
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
            <span className="text-brand">
              siempre{" "}
              <RotatingWords
                words={["despierto.", "a su lado.", "en su idioma."]}
              />
            </span>
          </h1>

          <p
            className="animate-fade-in-up text-lead mt-7 max-w-[34rem] text-white/85"
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
      </div>
    </section>
  );
}
