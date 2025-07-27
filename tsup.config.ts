import { defineConfig } from "tsup";
import { globSync } from "glob";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/client/index.ts",
    ...glob.sync("src/server/**/*.ts"),
  ],
  format: ["esm", "cjs"],
  dts: true,
});
