import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
  plugins: [reactRefresh()]
})
