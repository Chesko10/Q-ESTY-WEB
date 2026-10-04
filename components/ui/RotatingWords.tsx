"use client";

import { useEffect, useState } from "react";

type State = "active" | "leaving" | "waiting";

type RotatingWordsProps = {
  /** La primera es la que se lee (Google, lectores de pantalla, sin JS y con movimiento reducido). */
  words: string[];
  /** Tiempo visible de cada palabra, sin contar el giro. */
  holdMs?: number;
};

const SPIN_MS = 700;

// Giro con arranque y frenada suaves. La que sale se apaga y se desenfoca
// pronto; la que entra se enfoca con retraso, así nunca se leen dos a la vez.
const states: Record<State, string> = {
  active:
    "rotate-x-0 opacity-100 blur-none [transition:transform_700ms_cubic-bezier(0.65,0,0.35,1),opacity_450ms_ease-out_250ms,filter_450ms_ease-out_250ms]",
  leaving:
    "rotate-x-90 opacity-0 blur-[8px] [transition:transform_700ms_cubic-bezier(0.65,0,0.35,1),opacity_400ms_ease-in,filter_400ms_ease-in]",
  // La siguiente espera debajo sin transición, para no cruzar por delante
  waiting: "-rotate-x-90 opacity-0 blur-[8px]",
};

/**
 * Rota palabras como las caras de un cubo que gira hacia arriba: la actual
 * sale por arriba y la siguiente entra desde abajo.
 * Todas se apilan en la misma celda de un inline-grid, así que el hueco
 * siempre mide lo que la más larga y el texto de alrededor no salta. La celda
 * recorta el giro a su propia línea (con margen abajo y a los lados para los
 * trazos descendentes y el desenfoque) para no pisar el texto de alrededor.
 * Las palabras visibles se pintan con `content: attr()` dentro de un bloque
 * aria-hidden: el único texto real es la primera palabra (sr-only), que es
 * lo que leen Google y los lectores de pantalla.
 */
export default function RotatingWords({
  words,
  holdMs = 2500,
}: RotatingWordsProps) {
  const [active, setActive] = useState(0);
  const intervalMs = holdMs + SPIN_MS;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const sync = () => {
      window.clearInterval(timer);
      setActive(0);
      if (media.matches) return;
      timer = window.setInterval(
        () => setActive((index) => (index + 1) % words.length),
        intervalMs
      );
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      window.clearInterval(timer);
      media.removeEventListener("change", sync);
    };
  }, [words.length, intervalMs]);

  const previous = (active - 1 + words.length) % words.length;

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span
        aria-hidden
        className="-mx-[0.12em] -mb-[0.22em] inline-grid overflow-hidden px-[0.12em] pb-[0.22em] perspective-[900px]"
      >
        {words.map((word, index) => {
          const state: State =
            index === active
              ? "active"
              : index === previous
                ? "leaving"
                : "waiting";
          return (
            <span
              key={word}
              data-text={word}
              className={`col-start-1 row-start-1 whitespace-nowrap backface-hidden [transform-origin:50%_50%_-0.5em] before:content-[attr(data-text)] motion-reduce:transition-none ${states[state]}`}
            />
          );
        })}
      </span>
    </>
  );
}
