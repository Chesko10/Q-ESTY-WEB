import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracotta">
          Sobre nosotros
        </span>
        <h2 className="mt-2 font-serif text-4xl font-semibold text-brown-dark text-balance">
          Un equipo apasionado por la hostelería y la tecnología
        </h2>
        <p className="mt-6 text-lg text-brown">
          Somos un equipo pequeño que cree que la tecnología debería hacer la
          hospitalidad más humana, no menos. Nacimos de la frustración de ver
          a recepcionistas repitiendo las mismas respuestas mil veces al día,
          y decidimos construir la herramienta que nos hubiera gustado tener.
          Hoy ayudamos a hoteles y hostales a dar una atención más rápida y
          cercana, sin perder ese trato cuidado que hace especial a cada
          alojamiento.
        </p>
        <p className="mt-4 text-brown/70 text-sm italic">
          (Texto de ejemplo — sustitúyelo por la historia real del equipo.)
        </p>
      </Reveal>
    </section>
  );
}
