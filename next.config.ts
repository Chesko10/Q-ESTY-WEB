import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 es el valor por defecto; 90 para la foto del hero
    qualities: [75, 90],
  },
};

export default nextConfig;
