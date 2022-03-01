import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ViteFonts({
    google: {
      families: [
        {
          name: 'Roboto',
          styles: 'ital,wght@0,400;1,200',
          defer: true
        },
        {
          name: 'Inter',
          styles: 'ital,wght@0,400;1,200',
          defer: true
        },
    ],
    },
  })]
})
