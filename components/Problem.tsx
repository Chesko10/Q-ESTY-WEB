import { PhoneOff, HelpCircle, Languages, Wrench } from "lucide-react";
import Reveal from "./ui/Reveal";

const points = [
  {
    icon: PhoneOff,
    problem: "Llamadas constantes a recepción",
    solution:
      "Tu equipo deja de repetir las mismas respuestas: Güesty las resuelve al instante.",
  },
  {
    icon: HelpCircle,
    problem: "Huéspedes que no encuentran información básica",
    solution:
      "Wifi, horarios, normas de la casa... todo disponible en segundos, sin buscar carteles.",
  },
  {
    icon: Languages,
    problem: "La barrera del idioma",
    solution:
      "Güesty conversa en 6 idiomas, así que nadie se queda sin entender.",
  },
  {
    icon: Wrench,
    problem: "Gestión lenta de incidencias",
    solution:
      "Un huésped reporta un problema y tu equipo recibe el aviso al momento.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream-dark px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-semibold text-brown-dark text-balance">
            Los mismos problemas de siempre
          </h2>
          <p className="mt-4 text-lg text-brown">
            Cada hotelero conoce estas fricciones. Güesty existe para
            quitártelas de encima.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {points.map(({ icon: Icon, problem, solution }, index) => (
            <Reveal key={problem} delayMs={index * 90}>
              <div className="card-elevate rounded-2xl bg-cream p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/15">
                  <Icon
                    className="h-5 w-5 text-terracotta-dark"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-brown-dark">
                  {problem}
                </h3>
                <p className="mt-2 text-brown">{solution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
