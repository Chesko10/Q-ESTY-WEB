import Image from "next/image";
import ContactForm from "./ContactForm";
import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section id="demo" className="scroll-mt-24 border-y border-sand bg-cream-dark px-6 py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <Image
            src="/questy_icon_transparent.png"
            alt="Güesty"
            width={56}
            height={56}
            className="mx-auto mb-4"
          />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracotta">
            Empieza hoy
          </span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-brown-dark text-balance">
            Solicita una demo de Güesty
          </h2>
          <p className="mt-4 text-lg text-brown">
            Cuéntanos sobre tu alojamiento y te mostramos cómo Güesty puede
            cuidar de tus huéspedes.
          </p>
        </Reveal>

        <Reveal
          delayMs={120}
          className="mt-12 rounded-[14px] bg-white p-8 shadow-sm ring-1 ring-brown/10 sm:p-10"
        >
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
