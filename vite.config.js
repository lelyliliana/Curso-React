import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pluginLaboratorio } from "./laboratorio/api.js";
export default defineConfig({
  base: "./",
  plugins: [react(), pluginLaboratorio()],
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
});
