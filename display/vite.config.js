import LitRefresh from "@dblechoc/plugin-lit-refresh";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [LitRefresh()],
    build: {
        lib: {
            entry: 'src/main.js',
            formats: ['es']
        },
        rollupOptions: {
            external: /^lit/
        }
    }
})
