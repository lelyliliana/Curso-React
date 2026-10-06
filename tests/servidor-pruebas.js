import { createServer } from "vite";
const server = await createServer({
  server: { host: "127.0.0.1", port: 0, strictPort: true },
});
await server.listen();
console.log(`http://127.0.0.1:${server.httpServer.address().port}`);
