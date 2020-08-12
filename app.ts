import { serve } from "https://deno.land/std/http/server.ts";

// Network requests blocked by default, to open up a server, which is related to network, need extra permission flag: `deno run --allow-net app.ts`
const server = serve({ port: 3000 });

// server is an async iterable, like an array full of promises. Server creates new promises which we can await, and a new promise that resolves is generated for every incoming request
for await (const req of server) {
  req.respond({ body: "Hello world\n" });
}
