import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

const plans = [
  {
    name: "Starter",
    sub: "Hasta 20 habitaciones",
    price: "29€",
    period: "/mes",
    features: [
      "1 alojamiento",
      "Códigos QR incluidos",
      "Dudas e información 24/7",
    ],
    cta: "Solicitar demo",
    featured: false,
  },
  {
    name: "Pro",
    sub: "Hasta 60 habitaciones o varias propiedades",
    price: "79€",
    period: "/mes",
    features: [
      "Idiomas ilimitados",
      "Pedidos al restaurante",
      "Late check-out y gestión de incidencias",
      "Recomendaciones locales",
    ],
    cta: "Solicitar demo",
    featured: true,
  },
  {
    name: "Business",
    sub: "Gestores con muchas propiedades",
    price: "A medida",
    period: "",
    features: [
      "Propiedades ilimitadas",
      "Panel centralizado",
      "Soporte dedicado",
    ],
    cta: "Hablar con ventas",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Precios"
          title="Un plan para cada alojamiento"
          description="Precios de referencia según el tamaño de tu alojamiento. Escríbenos para una cotización a medida."
        />

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delayMs={index * 100} className="h-full">
              <div
                className={
                  plan.featured
                    ? "relative flex h-full flex-col rounded-[14px] border border-terracotta bg-gradient-to-b from-terracotta/[0.08] to-white to-40% p-8 shadow-[0_4px_20px_-4px_rgba(58,27,18,0.12)]"
                    : "flex h-full flex-col rounded-[14px] border border-sand bg-white p-8 shadow-[0_4px_20px_-4px_rgba(58,27,18,0.12)]"
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-terracotta px-3.5 py-1 text-xs font-bold text-white">
                    Más popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold text-brown-dark">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm text-brown">{plan.sub}</p>
                <div className="mt-4 font-serif text-4xl font-bold text-brown-dark">
                  {plan.price}
                  {plan.period && (
                    <span className="font-sans text-base font-medium text-brown">
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className="my-6 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-t border-sand py-2 text-sm text-brown first:border-t-0"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#demo"
                  variant={plan.featured ? "primary" : "outline"}
                  className="justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
