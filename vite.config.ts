import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
})
