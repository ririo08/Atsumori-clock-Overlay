import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.spec.ts'],
    environment: 'node',
    environmentMatchGlobs: [['test/nuxt/**/*.spec.ts', 'nuxt']],
  },
})
