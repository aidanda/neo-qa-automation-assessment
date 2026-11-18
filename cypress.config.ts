
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.shino.de/parkcalc/",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: false
  },
  video: false,
  screenshotsFolder: "cypress/results/screenshots"
});
