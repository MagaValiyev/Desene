import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

/**
 * web onizlemesi icin yapildi
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {'react-native': 'react-native-web'},
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  define: {
    global: 'window',
    __DEV__: 'true',
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
  server: {
    open: true,
    port: 5173,
  },
});
