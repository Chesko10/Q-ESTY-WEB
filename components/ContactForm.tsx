"use client";

import { FormEvent, useState } from "react";
import Button from "./ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      hotelName: (form.elements.namedItem("hotelName") as HTMLInputElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "No se pudo enviar el formulario.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Ha ocurrido un error."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-confirm/30 bg-confirm/10 p-8 text-center">
        <p className="font-serif text-xl font-semibold text-brown-dark">
          ¡Gracias! Hemos recibido tu solicitud.
        </p>
        <p className="mt-2 text-brown">
          Te contactaremos en breve para organizar la demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-brown-dark">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-brown/20 bg-cream px-4 py-3 text-brown-dark placeholder:text-brown/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-brown-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-brown/20 bg-cream px-4 py-3 text-brown-dark placeholder:text-brown/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          placeholder="tu@email.com"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="hotelName"
          className="text-sm font-medium text-brown-dark"
        >
          Nombre del hotel/hostal
        </label>
        <input
          id="hotelName"
          name="hotelName"
          type="text"
          required
          className="rounded-xl border border-brown/20 bg-cream px-4 py-3 text-brown-dark placeholder:text-brown/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          placeholder="Hostal Los Almendros"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-brown-dark"
        >
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-xl border border-brown/20 bg-cream px-4 py-3 text-brown-dark placeholder:text-brown/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          placeholder="Cuéntanos un poco sobre tu alojamiento..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta-dark">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? "Enviando..." : "Solicitar demo"}
      </Button>
    </form>
  );
}
