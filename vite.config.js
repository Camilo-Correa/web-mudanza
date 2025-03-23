import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas
    port: process.env.PORT || 3000, // Usa el puerto asignado o 3000 por defecto
  },
  preview: {
    host: true, // Permite conexiones externas en modo preview
    port: process.env.PORT || 3000, // Usa el puerto asignado o 3000 por defecto
    allowedHosts: ['web-mudanza.onrender.com'], // Agrega tu dominio aquí
  },
});
