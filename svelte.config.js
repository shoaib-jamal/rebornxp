import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';
import compression from 'compression'; // for asset compression
import { createServer } from 'http';
import { resolve } from 'path';

const config = {
  kit: {
    // Specify the adapter for deployment
    adapter: adapter(),

    // Define additional adapter options if needed
    // adapter: adapter({ out: 'build' }),

    // Define middleware to be applied to all routes
    middleware: async (handler) => {
      handler.use((request, response, next) => {
        // Enable compression for assets (gzip)
        compression()(request, response, next);
      });

      handler.use((request, response, next) => {
        // Set caching headers for static assets (change max-age according to your requirements)
        response.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 day in seconds
        next();
      });

      return handler;
    },

    // Specify other kit options as needed
    // kit options...
  },

  // Define preprocess options (e.g., PostCSS)
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  // Additional configurations for development and production
  // rollup, vite, webpack, etc.
  // rollup: {
  //   plugins: []
  // },

  // Specify other configurations as needed
};

export default config;

