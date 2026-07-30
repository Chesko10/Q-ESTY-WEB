import Image from "next/image";
import Reveal from "./ui/Reveal";

export default function HighlightBar() {
  return (
    <Reveal className="bg-amber px-6 py-3">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2.5 text-center text-sm font-bold text-brown-dark">
        <Image
          src="/questy_icon_transparent.png"
          alt=""
          aria-hidden
          width={20}
          height={20}
        />
        Sin apps que descargar. Escanea el QR de tu habitación y empieza a
        chatear al momento.
      </div>
    </Reveal>
  );
}
