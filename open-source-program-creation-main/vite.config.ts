import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "pp-tagger";

export default defineConfig(({ mode }) => ({
  // Electron loads the built renderer from file://, so assets must use relative paths.
  base: mode === "desktop" ? "./" : "/",
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: { overlay: false },
  },
}));
