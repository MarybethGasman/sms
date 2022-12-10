// controllers/students.ts
import {
    getAllStudents,
    searchStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "../model/students.ts";

// 定义学生控制器类
class StudentsController {
    // 查询所有学生信息
    static async getAll(ctx) {
        try {
            // 获取分页、排序参数
            const page = ctx.request.url.searchParams.get("page") || 1;
            const limit = ctx.request.url.searchParams.get("limit") || 10;
            const sort = {
                field: ctx.request.url.searchParams.get("sort") || "id",
                order: ctx.request.url.searchParams.get("order") || "asc",
            };
            // 查询学生信息
            const data = await getAllStudents(page, limit, sort);
            ctx.response.body = {
                data,
            };
        } catch (error) {
            throw error;
        }
    }
    // 搜索学生信息
    static async search(ctx) {
        try {
            // 获取搜索、分页、排序参数
            const keyword = ctx.request.url.searchParams.get("keyword");
            const page = ctx.request.url.searchParams.get("page") || 1;
            const limit = ctx.request.url.searchParams.get("limit") || 10;
            const sort = {
                field: ctx.request.url.searchParams.get("sort") || "id",
                order: ctx.request.url.searchParams.get("order") || "asc",
            };

            // 搜索学生信息
            const data = await searchStudents(keyword, page, limit, sort);
            ctx.response.body = {
                data,
            };
        } catch (error) {
            throw error;
        }
    }

    // 添加学生信息
    static async add(ctx) {
        try {
            const body = await ctx.request.body();
            const { name, age, gender, grade } = await (body.value);

            // 添加学生信息
            const result = await addStudent(name, age, gender, grade);

            ctx.response.body = {
                message: "学生信息插入成功",
                data: result,
            };
        } catch (error) {
            throw error;
        }
    }

    // 更新学生信息
    static async update(ctx) {
        try {
            const { id } = ctx.params;
            const body = await ctx.request.body();
            const { name, age, gender, grade } = await (body.value);
            // 更新学生信息
            const result = await updateStudent(id, name, age, gender, grade);

            ctx.response.body = {
                message: "学生信息更新成功",
                data: result,
            };
        } catch (error) {
            throw error;
        }
    }

    // 删除学生信息
    static async delete(ctx) {
        try {
            const { id } = ctx.params;

            // 删除学生信息
            const result = await deleteStudent(id);

            ctx.response.body = {
                message: "学生信息删除成功",
                data: result,
            };
        } catch (error) {
            throw error;
        }
    }

}
export { StudentsController };