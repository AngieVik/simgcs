import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "icons/*.png",
        "backgrounds/*.jpg",
        "backgrounds/*.webp",
        "sounds/*.mp3",
        "sounds/*.ogg",
      ],
      manifest: {
        name: "Simulador de Casos Glasgow",
        short_name: "SimuladorGCS",
        description:
          "Entrena la Escala de Coma de Glasgow con casos narrativos.",
        id: "/?source=pwa",
        start_url: "/",
        display: "standalone",
        background_color: "#0c111d",
        theme_color: "#0c111d",
        categories: ["education", "medical"],
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        shortcuts: [
          {
            name: "Nuevo Caso",
            short_name: "Caso",
            description: "Inicia un nuevo caso GCS.",
            url: "/?action=new-case",
            icons: [
              {
                src: "/icons/ambulance-shortcut.png",
                sizes: "96x96",
                type: "image/png",
              },
            ],
          },
        ],
      },
      workbox: {
        // Precache todos los assets generados por Vite
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,webp,svg,woff,woff2}"],
        // Cache runtime para fuentes de Google
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  base: "/",
});
