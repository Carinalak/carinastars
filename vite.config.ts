import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { version } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
    registerType: 'autoUpdate', // Uppdaterar automatiskt när ny version finns
    includeAssets: ['robots.txt'], // valfria statiska filer
    manifest: {
      name: "Music",
      short_name: "Music",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        { src: "icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "icon-512.png", sizes: "512x512", type: "image/png" }
      ]
      }
    })

  ],
  base: '/',
  define: {
  'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
},
})
