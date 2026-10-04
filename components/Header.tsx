"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { href: "#how", label: "Cómo funciona" },
  { href: "#features", label: "Funciones" },
  { href: "#hotels", label: "Para hoteles" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

const tones = {
  light: {
    glass:
      "bg-white/75 shadow-[inset_0_0_0_1px_rgb(237_230_228/0.9),var(--shadow-soft)] backdrop-blur-xl backdrop-saturate-150",
    brand: "text-ink",
    link: "text-ink-muted hover:text-ink focus-visible:text-ink",
    icon: "text-ink",
    mobileLink: "border-line text-ink",
  },
  dark: {
    glass:
      "bg-night/75 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08),0_8px_24px_-12px_rgb(0_0_0/0.5)] backdrop-blur-xl backdrop-saturate-150",
    brand: "text-white",
    link: "text-on-dark-muted hover:text-white focus-visible:text-white",
    icon: "text-white",
    mobileLink: "border-white/10 text-white",
  },
};

export default function Header({ tone = "light" }: { tone?: keyof typeof tones }) {
  const t = tones[tone];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glass = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-[1200px] rounded-inner transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out-soft ${
          glass ? t.glass : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-8 px-4 py-3 sm:px-5">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Image
              src="/questy_icon_transparent.png"
              alt=""
              width={34}
              height={34}
            />
            <span className={`font-display text-xl font-bold tracking-[-0.02em] ${t.brand}`}>
              Qüesty
            </span>
          </a>

          <nav aria-label="Principal" className="hidden flex-1 items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[0.9375rem] transition-colors focus-visible:outline-none ${t.link}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden lg:block">
            <Button href="#demo" arrow className="px-5 py-3 text-sm">
              Solicitar demo
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className={`ml-auto flex h-10 w-10 items-center justify-center rounded-control focus-visible:outline-2 focus-visible:outline-brand lg:hidden ${t.icon}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-300 ease-out-soft lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav aria-label="Móvil" className="flex flex-col px-4 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={`border-b py-3.5 ${t.mobileLink}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#demo"
                arrow
                tabIndex={open ? 0 : -1}
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                Solicitar demo
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
