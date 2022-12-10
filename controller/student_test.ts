import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test("create student test", async () => {
    const student = {
        name: "John Doe",
        age: 20,
        gender: "男",
        grade: "A"
    };

    const body = JSON.stringify(student);
    const response = await fetch("http://localhost:8000/students", {
        method: "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        body: body
    });
    console.log(response)
    assertEquals(response.ok, true);
    await response.text();
});

Deno.test("update student test", async () => {
    const student = {
        name: "John Doe",
        age: 20,
        gender: "女",
        grade: "A"
    };

    const body = JSON.stringify(student);
    const response = await fetch(`http://localhost:8000/students/${13}`, {
        method: "PUT",
        "headers": {
            "Content-Type": "application/json",
        },
        body: body
    });
    console.log(response)
    assertEquals(response.ok, true);
    await response.text();
});


Deno.test("delete student test", async () => {
    const student = {
        name: "John Doe",
        age: 20,
        gender: "女",
        grade: "A"
    };

    const body = JSON.stringify(student);
    const response = await fetch(`http://localhost:8000/students/${13}`, {
        method: "DELETE",
        "headers": {
            "Content-Type": "application/json",
        },
        body: body
    });
    console.log(response)
    assertEquals(response.ok, true);
    await response.text();
});