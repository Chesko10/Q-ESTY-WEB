import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          eyebrow="Precios"
          title="Precios adaptados a tu alojamiento"
          description="Cada hotel, hostal o apartamento es distinto — por eso no usamos planes cerrados. Cuéntanos sobre tu alojamiento y te preparamos un presupuesto a medida."
        />

        <Reveal delayMs={120} className="mt-10">
          <Button href="#demo">
            Solicitar presupuesto
            <span aria-hidden className="ml-1.5">
              →
            </span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
