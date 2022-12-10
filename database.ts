import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "./utils/config.ts";

// 创建mysql连接实例
const client = await new Client().connect(config.database);

export { client };
