import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "node20",
  platform: "node",

  outDir: "dist",
  clean: true,

  splitting: false,
  bundle: true,

  noExternal: ["@repo/db", "@repo/schemas"], // 🔥 VERY IMPORTANT
});