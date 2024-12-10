/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vue({
    //   template: {
    //     compilerOptions: {
    //       // 'ion-'으로 시작하는 태그들을 커스텀 엘리먼트로 인식하도록 설정
    //     //   isCustomElement: (tag) => {
    //     //     console.log(tag);
    //     //     return tag.startsWith('ion-');
    //     //   }
    //       isCustomElement: (tag) => tag.startsWith('ion-')
    //     }
    //   }
    // }),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
