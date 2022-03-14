import { Router } from "https://deno.land/x/oak@v10.2.1/router.ts";

export function test(router: Router) {
    interface Book {
        id: string
        title: string
        author: string
    }

    const books = new Map<string, Book>();
    books.set("1", {
        id: "1",
        title: "The Hound of the Baskervilles",
        author: "Conan Doyle, Arthur",
    });

    router
        .get("/", (context) => {
            context.response.body = "Hello world!";
        })
        .get("/book", (context) => {
            context.response.body = Array.from(books.values());
        })
        .get("/book/:id", (context) => {
            if (books.has(context?.params?.id)) {
                context.response.body = books.get(context.params.id);
            }
        })
        .get("/work/:id/:name", (ctx) => {
            console.log(ctx?.params)
            ctx.response.body = {
                code: 200,
                msg: "查询成功"
            }
        })
        .get("/test", (ctx) => {
            console.log(ctx)
            ctx.response.body = {
                code: 200,
                msg: "查询成功"
            }
        })
        .post("/addWork", async (ctx) => {
            const data = await ctx.request.body({
                type: "json"
            }).value
            console.log(data)
            ctx.response.body = {
                code: 200,
                msg: "新增"
            }
        })
}

