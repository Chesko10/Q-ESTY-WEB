import Reveal from "./ui/Reveal";

const stats = [
  { value: "24/7", label: "Disponible para tus huéspedes, sin descanso" },
  { value: "6 idiomas", label: "Conversaciones sin barrera del idioma" },
  { value: "Minutos", label: "Para poner en marcha Güesty en tu alojamiento" },
];

export default function Stats() {
  return (
    <section className="bg-brown-dark px-6 py-16 text-cream">
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.value} delayMs={index * 120} className="text-center">
            <p className="font-serif text-4xl font-bold sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-cream/75">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
