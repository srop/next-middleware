require("dotenv").config();
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const helmet = require("helmet"); // Import the helmet middleware
const cors = require("cors"); // Import the cors middleware
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.NEXT_PUBLIC_PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // Disable the "X-Powered-By" header
    server.disable("x-powered-by");

    // Use helmet middleware to set custom headers
   

    // Define your proxy middleware with URL rewriting
    const apiProxy = createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/", // Rewrite '/api' to the root path '/'
      },
      onProxyReq: (proxyReq) => {
        // Customize request headers here

        proxyReq.setHeader("Authorization", "Bearer your-access-token");
        proxyReq.setHeader("X-Custom-Header", "Custom Header Value");
        // Add other custom headers as needed
      },
      onProxyRes: (proxyRes, req, res) => {
        // Customize response headers here
        proxyRes.headers["Access-Control-Max-Age"] = "31536000;includeSubDomains";
        proxyRes.headers["Cross-Origin-Opener-Policy"] = " unsafe-none";
        proxyRes.headers["Content-Security-Policy"] =
          "default-src 'none'; script-src 'self' 'unsafe-inline'; connect-src * ; img-src 'self'; style-src 'self' 'unsafe-inline' ;base-uri 'self';form-action 'self'; font-src 'self' fonts.gstatic.com";
        // Add other custom response headers as needed
      },
    });

    // Use the proxy middleware for paths that start with '/api'
    server.use("/api", apiProxy);
    //server.use(["/api"], createProxyMiddleware(apiProxy["/api"]));
    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });
