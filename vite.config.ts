import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src')
    },
  },
  plugins: [
    reactRefresh(), 

    /* 兼容ie11插件 */
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']  
    })
  ]
})
