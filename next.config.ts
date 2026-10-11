import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Solo en desarrollo: permite abrir `next dev` desde el móvil en la red local
  allowedDevOrigins: ["192.168.1.121"],
  images: {
    // 75 es el valor por defecto; 90 para la foto del hero
    qualities: [75, 90],
  },
};

export default nextConfig;
