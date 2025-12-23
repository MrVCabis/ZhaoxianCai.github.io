import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // GitHub Pages 部署路径
  // 如果仓库名是 username.github.io，使用 base: '/'
  // 如果仓库名是其他名字（如 portfolio），使用 base: '/portfolio/'
  base: './', // 使用相对路径，适用于所有情况
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});