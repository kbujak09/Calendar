import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: { usePolling: true, interval: 100 },
    hmr: {
      host: "localhost",
      clientPort: 5173,
      protocol: "ws",
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
});