import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({  exclude: [
    'util', // Excludes the polyfill for `http` and `node:http`.
  ],}),],
  server: {
    port: 3000,
  },
})
