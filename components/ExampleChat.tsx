import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import ChatMockup from "./ui/ChatMockup";

const conversation = [
  { from: "guest" as const, text: "Hola! ¿A qué hora es el desayuno?" },
  {
    from: "bot" as const,
    text: "¡Buenos días! El desayuno es de 7:30 a 10:30 en la planta baja. ¿Te apetece algo del restaurante para la habitación?",
  },
  { from: "guest" as const, text: "Sí, ¿tenéis algo ligero?" },
  {
    from: "bot" as const,
    text: "Claro, tenemos ensalada de la huerta y zumo natural de naranja. ¿Te lo subimos a la 214?",
  },
  { from: "guest" as const, text: "Perfecto, gracias" },
  {
    from: "bot" as const,
    text: "Pedido enviado a cocina — llega en 15-20 min",
    confirm: true,
  },
  {
    from: "guest" as const,
    text: "Por cierto, ¿algún sitio para cenar cerca de la playa esta noche?",
  },
  {
    from: "bot" as const,
    text: "Te recomiendo Restaurante Mar de Águilas, a 5 min a pie: pescado fresco y terraza frente al mar 🌊",
  },
];

export default function ExampleChat() {
  return (
    <section id="example" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Ejemplo real"
          title="Así conversa un huésped con Güesty"
          description="Hotel Costa Serena · Águilas, Murcia — hotel de 4 estrellas con 120 habitaciones."
        />

        <Reveal delayMs={120} className="mt-14">
          <ChatMockup messages={conversation} />
        </Reveal>
      </div>
    </section>
  );
}
