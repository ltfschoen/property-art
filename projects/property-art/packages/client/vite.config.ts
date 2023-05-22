import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: "*",
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
    },
    port: 3000,
    fs: {
      strict: false,
    },
  },
  // root: './',
  base: '/',
  build: {
    target: "es2022",
    // chunkSizeWarningLimit: 3000,
    outDir: 'dist',
  },
  publicDir: 'public'
});
