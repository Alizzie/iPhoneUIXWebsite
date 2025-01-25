import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "ali-0w",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "ali-0w",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "ali-0w",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})