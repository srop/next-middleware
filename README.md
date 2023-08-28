## Use proxy for call external api

- adjust package.json for call server.js
  
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

build docker image

```bash
docker build -t next-docker .

```

สร้าง Container

```bash
docker run -p 3000:3000 --name NextjsDocker next-docker

```
