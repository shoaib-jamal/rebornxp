// hooks.js

export const handle = async ({ event, resolve }) => {
  // Set caching headers for static assets
  const response = await resolve(event, {
    ssr: false,
    // Add caching headers to the response
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 1 day in seconds
      // Add other headers if needed
    }
  });

  return response;
};

