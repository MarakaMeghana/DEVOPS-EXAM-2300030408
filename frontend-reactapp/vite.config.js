import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/2300030408_frontend/', // subfolder
  plugins: [react()],
});
