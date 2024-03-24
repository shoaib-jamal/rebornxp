import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(), // Use the adapter-netlify adapter
    
    // Optionally, specify other adapter options, such as `out` for the build output directory
    // adapter: adapter({ out: 'build' })
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
