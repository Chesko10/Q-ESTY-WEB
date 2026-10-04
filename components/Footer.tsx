import Image from "next/image";

const productLinks = [
  { href: "#how", label: "Cómo funciona" },
  { href: "#features", label: "Funciones" },
  { href: "#hotels", label: "Para hoteles" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

const contactEmail = "guesty1318@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10">
      <div className="container-page">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <Image src="/questy_icon_transparent.png" alt="" width={34} height={34} />
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                Qüesty
              </span>
            </a>
            <p className="mt-4 max-w-[32ch] text-ink-muted">
              Tu anfitrión virtual, siempre despierto.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="text-eyebrow text-ink-subtle">Producto</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow text-ink-subtle">Contacto</h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[0.9375rem] text-ink-muted transition-colors hover:text-brand"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-[0.9375rem] text-ink-muted transition-colors hover:text-brand"
                >
                  Solicitar demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-8 text-[0.875rem] text-ink-subtle">
          © {year} Qüesty. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
