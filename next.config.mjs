const nextConfig = {
    async headers() {
      return [
        {
          source: "/api/(.*)",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: process.env.ALLOWED_ORIGIN || "*", // Default to * if ALLOWED_ORIGIN is not set
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, POST, PUT, DELETE, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  