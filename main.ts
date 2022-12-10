// main.ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";
import { router } from "./router.ts";
import { config } from "./utils/config.ts";

const app = new Application();

app.use(logger.logger)
app.use(logger.responseTime)

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: config.port });