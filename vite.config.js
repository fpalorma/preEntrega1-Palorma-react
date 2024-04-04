import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "src/assets",
  define: {
  
    VITE_FIREBASE_CONFIG: import.meta.env.VITE_FIREBASE_CONFIG,
  },
})
