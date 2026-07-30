import Image from "next/image";

const links = [
  { href: "#features", label: "Funciones" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "mailto:guesty1318@gmail.com", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5 text-center text-sm text-brown sm:text-left">
          <Image
            src="/questy_icon_transparent.png"
            alt="Güesty"
            width={28}
            height={28}
          />
          <span>
            <span className="block">
              © {year} Güesty. Todos los derechos reservados.
            </span>
            <span className="block text-xs text-brown/85">
              Tu anfitrión virtual, siempre despierto.
            </span>
          </span>
        </div>

        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brown transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
