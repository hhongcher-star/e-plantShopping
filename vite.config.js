import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/',   // ⚠ 必须和仓库名完全一样
  plugins: [react()],
})