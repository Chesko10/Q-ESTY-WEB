"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

const navLinks = [
  { href: "#features", label: "Funciones" },
  { href: "#how", label: "Cómo funciona" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-3.5">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/questy_icon_transparent.png"
            alt="Qüesty"
            width={36}
            height={36}
          />
          <span className="hidden font-serif text-xl font-bold text-brown-dark sm:inline">
            Qüesty
          </span>
        </a>

        <nav className="hidden flex-1 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brown transition-colors hover:text-brown-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Button href="#demo" className="px-5 py-2.5 text-sm">
            Solicitar demo
            <span aria-hidden className="ml-1.5">
              →
            </span>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto text-2xl text-brown-dark md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-sand bg-cream px-6 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-sand py-3 text-sm text-brown"
            >
              {link.label}
            </a>
          ))}
          <Button href="#demo" className="mt-3 justify-center text-sm" onClick={() => setOpen(false)}>
            Solicitar demo
          </Button>
        </div>
      )}
    </header>
  );
}
