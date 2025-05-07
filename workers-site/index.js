// workers-site/index.js
export default {
    async fetch(request, env) {
      // Hanya serve static from dist
      return env.__STATIC_CONTENT.fetch(request);
    },
  };
  