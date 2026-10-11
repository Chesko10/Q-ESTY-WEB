"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "playing" | "ended";

export default function HowItWorksVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  // Pausa el vídeo si el usuario sale de la sección mientras se reproduce
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.25 && !video.paused) video.pause();
      },
      { threshold: [0, 0.25] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;
    setStatus("playing");
    try {
      video.muted = false;
      await video.play();
    } catch {
      video.controls = false;
      setStatus("idle");
    }
  }

  function handleEnded() {
    const video = videoRef.current;
    if (!video) return;

    // load() devuelve el vídeo al póster
    video.controls = false;
    video.load();
    setStatus("ended");
  }

  return (
    <div className="relative mx-auto w-full max-w-[calc(80svh*9/16)] lg:max-w-[min(400px,calc((100svh_-_160px)*9/16))]">
      <video
        ref={videoRef}
        src="/videos/questy-como-funciona.mp4"
        poster="/videos/questy-como-funciona-poster.jpg"
        preload="none"
        playsInline
        onEnded={handleEnded}
        aria-label="Vídeo: cómo funciona Qüesty, el anfitrión virtual que responde a tus huéspedes"
        className="block aspect-[9/16] w-full rounded-card bg-ink object-cover shadow-float"
      />

      {status !== "playing" && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Reproducir el vídeo de cómo funciona Qüesty"
          className="absolute bottom-[18%] left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold whitespace-nowrap text-brand shadow-[0_6px_20px_-6px_rgb(0_0_0/0.45)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span aria-hidden="true">{status === "ended" ? "↺" : "▶︎"}</span>
          {status === "ended" ? "Ver otra vez" : "Ver cómo funciona"}
        </button>
      )}
    </div>
  );
}
