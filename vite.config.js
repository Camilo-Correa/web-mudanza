import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Carga el archivo .env

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 3000,
  },
  preview: {
    host: true,
    port: process.env.PORT || 3000,
    allowedHosts: ["web-mudanza.onrender.com"],
  },
  define: {
    "process.env": process.env, // Asegura que las variables de entorno estén disponibles
  },
});
