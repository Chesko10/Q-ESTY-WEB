import ContactForm from "./ContactForm";
import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="bg-cream-dark px-6 py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-semibold text-brown-dark text-balance">
            Solicita una demo
          </h2>
          <p className="mt-4 text-lg text-brown">
            Cuéntanos sobre tu alojamiento y te mostramos cómo Güesty puede
            ayudarte.
          </p>
        </Reveal>

        <Reveal
          delayMs={120}
          className="mt-12 rounded-3xl bg-cream p-8 shadow-sm ring-1 ring-brown/10 sm:p-10"
        >
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
