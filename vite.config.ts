import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 會把專案站台放在 https://<user>.github.io/<repo>/
// 因此 base 需設定為 repo 名稱；本機開發（vite dev）則使用 '/'
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'build' ? '/CareerPortfolio/' : '/',
}))
