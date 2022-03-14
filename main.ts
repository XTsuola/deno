import { Application, Router } from "https://deno.land/x/oak@v10.2.1/mod.ts";
import { test } from "./routes/index.ts"
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();
const router = new Router();

test(router)

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
