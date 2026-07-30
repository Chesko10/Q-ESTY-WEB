import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Sobre nosotros"
          title="Un equipo apasionado por la hostelería y la tecnología"
          description="Somos un equipo pequeño que cree que la tecnología debería hacer la hospitalidad más humana, no menos. Nacimos de la frustración de ver a recepcionistas repitiendo las mismas respuestas mil veces al día, y decidimos construir la herramienta que nos hubiera gustado tener. Hoy ayudamos a hoteles y hostales a dar una atención más rápida y cercana, sin perder ese trato cuidado que hace especial a cada alojamiento."
        />
        <Reveal delayMs={120} className="text-center">
          <p className="mt-4 text-brown/70 text-sm italic">
            (Texto de ejemplo — sustitúyelo por la historia real del equipo.)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
