export default {
    async fetch(request, env) {
      try {
        const url = new URL(request.url);
  
        // contoh: jika path bermula /api/, handle di sini
        if (url.pathname.startsWith("/api/")) {
          // return data JSON atau apa-apa logic
          return new Response(JSON.stringify({ message: "OK" }), {
            headers: { "Content-Type": "application/json" }
          });
        }
  
        // selain /api/, fallback kepada static assets
        return await env.__STATIC_CONTENT.fetch(request);
      } catch (err) {
        return new Response("Worker error: " + err.message, { status: 500 });
      }
    }
  };
  