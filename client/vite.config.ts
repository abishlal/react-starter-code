/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "src/shared/styles/global.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    css: true,
    coverage: {
      reporter: ["html"],
      reportsDirectory: "./src/test/.coverage",
    },
  },
});
