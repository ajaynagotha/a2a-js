import { defineConfig } from "tsup";
import pkg from "glob";
const { glob } = pkg;

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/client/index.ts",
    ...glob.sync("src/server/**/*.ts"),
  ],
  format: ["esm", "cjs"],
  dts: true,
});
