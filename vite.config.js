import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React_Tic_Tac_Toe/', // Replace with your repository name
});
