// 数据库操作文件（students.ts）
import { client } from "../database.ts";

// 查询所有学生信息
export async function getAllStudents(page, limit, sort) {
    try {
        // 拼接分页 SQL 语句
        const offset = (page - 1) * limit;
        const result = await client.query(
            `SELECT * FROM students ORDER BY ${sort.field} ${sort.order} LIMIT ? OFFSET ?`,
            [+limit, offset]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

// 搜索学生信息
export async function searchStudents(keyword, page, limit, sort) {
    try {
        // 拼接搜索和分页 SQL 语句
        const offset = (page - 1) * limit;
        const result = await client.query(
            ` SELECT * FROM students WHERE name LIKE ? ORDER BY ${sort.field} ${sort.order} LIMIT ? OFFSET ?`,
            [`%${keyword}%`, limit, offset]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

// 添加学生信息
export async function addStudent(name, age, gender, grade) {
    try {
        // 插入学生信息
        const result = await client.execute(
            "INSERT INTO students (name, age, gender, grade) VALUES (?, ?, ?, ?)",
            [name, age, gender, grade]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

// 更新学生信息
export async function updateStudent(id, name, age, gender, grade) {
    try {
        // 查询学生是否存在
        const student = await client.query(
            `SELECT * FROM students WHERE id =?`,
            [id],
        );
        if (!student) {
            throw new Error("学生不存在");
        }
        // 更新学生信息
        const result = await client.execute(
            "UPDATE students SET name = ?, age = ?, gender = ?, grade = ? WHERE id = ?",
            [name, age, gender, grade, id]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

// 删除学生信息
export async function deleteStudent(id) {
    try {
        // 查询学生是否存在
        const student = await client.query(
            `SELECT * FROM students WHERE id = ?`,
            [id],
        );
        if (!student) {
            throw new Error("学生不存在");
        }
        // 删除学生信息
        const result = await client.execute(
            "DELETE FROM students WHERE id = ?",
            [id]
        );
        return result;
    } catch (error) {
        throw error;
    }
}

// 查询学生分数
export async function getStudentScore(id) {
    try {
        // 查询学生是否存在
        const student = await client.query(
            `SELECT * FROM students WHERE id = ?`,
            [id],
        );
        if (!student) {
            throw new Error("学生不存在");
        }
        // 返回学生分数
        return student.score;
    } catch (error) {
        throw error;
    }
}

// 查询所有学生的平均分数
export async function getAvgStudentScore() {
    try {
        // 查询所有学生的分数
        const scores = await client.query(
            `SELECT score FROM students`
        );
        // 计算平均分数
        let total = 0;
        for (const score of scores) {
            total += score.score;
        }
        return total / scores.length;
    } catch (error) {
        throw error;
    }
}
