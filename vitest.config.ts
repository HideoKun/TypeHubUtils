/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    css: false // This disables CSS processing during tests
  },
  //
  css: {
    postcss: {},  // Disable PostCSS processing
    modules: false,  // Disable CSS modules
  },
})
