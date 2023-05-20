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
  build: {
    target: "es2022",
  },
});
