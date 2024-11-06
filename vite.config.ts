import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', 
  build: {
    rollupOptions: {
      external: [
        '/src/main.tsx' // Add the main.tsx file as an external dependency
      ]
    }
  }
});
