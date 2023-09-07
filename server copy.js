require("dotenv").config();
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// Your server code here

const port = process.env.NEXT_PUBLIC_PORT;

const apiPaths = {
  "/api": {
    // target: 'https://jsonplaceholder.typicode.com/',
    target: process.env.NEXT_PUBLIC_API_URL,
    pathRewrite: {
      "^/api": "/",
    },
    changeOrigin: true,
    xfwd: true,
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader("x-auth-user", "b05ff410-fbba-11ec-bfce-ddefb9f79237");
  },
  proxyRes: (proxyRes, req, res) => {
    proxyRes.headers['x-added'] = 'foobar'; // add new header to response
  },
};

app
  .prepare()
  .then(() => {
    const server = express();

    // if (isDevelopment) {
    server.use(["/api"], createProxyMiddleware(apiPaths["/api"]));
    //server.use('/api2', createProxyMiddleware(apiPaths['/api2']));
    // }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error:::::", err);
  });
