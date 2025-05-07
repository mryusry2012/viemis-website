export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      if (url.pathname.startsWith("/api/")) {
        // handle API…
        return new Response(JSON.stringify({ hello: "world" }), {
          headers: { "Content-Type": "application/json" }
        });
      }
      // otherwise serve static asset:
      return env.__STATIC_CONTENT.fetch(request);
    }
  };
  