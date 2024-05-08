import { defineConfig } from 'vite'
/* import { resolve } from 'path' */
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
/*   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'pages/admin.html'),
        spot: resolve(__dirname, 'pages/spot.html'),
        about: resolve(__dirname, 'pages/about.html'),
      },
    },
  }, */
})
