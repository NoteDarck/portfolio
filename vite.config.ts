import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Para desenvolvimento local, usamos base "/"
  // Para produção, usamos o nome do repositório
  base: mode === 'production' ? "/meu-portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Garantir que os assets sejam gerados corretamente
    assetsDir: "assets",
    // Desabilitar minificação para debug (opcional)
    minify: mode === 'production' ? 'terser' : false,
  }
}));