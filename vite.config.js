import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas
    port: process.env.PORT || 3000, // Usa el puerto asignado por Render o 3000 como fallback
  },
});
