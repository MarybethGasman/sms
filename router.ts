// router.ts
import { Router } from "https://deno.land/x/oak/mod.ts";
import { StudentsController } from "./controller/students.ts";

// 定义路由
const router = new Router();

router
    .get("/students", StudentsController.getAll)
    .get("/students/search", StudentsController.search)
    .post("/students", StudentsController.add)
    .put("/students/:id", StudentsController.update)
    .delete("/students/:id", StudentsController.delete);

export { router };