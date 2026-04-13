import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp fmt",
  },
  fmt: {},
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": "/src",
      "@public": "/public",
    },
  },
});
