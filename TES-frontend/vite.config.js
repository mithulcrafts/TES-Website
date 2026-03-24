import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/TES-Website/',
  
  // Build optimizations
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['tailwind-merge', 'class-variance-authority', 'clsx'],
          'vendor-gsap': ['gsap'],
          'vendor-particles': ['@tsparticles/react', '@tsparticles/slim'],
        }
      }
    },
    
    // Minify and compress
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      }
    },
    
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: 'esbuild',
  },
  
  // Optimizations for development
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
