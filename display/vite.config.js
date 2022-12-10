import LitRefresh from "@dblechoc/plugin-lit-refresh";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  plugins: [LitRefresh()],
  build: {
    target: "chrome100",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
      output: {
        dir: "dist",
      },
      external: /^lit/,
    },
  },
});
