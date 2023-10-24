import { Hono } from "hono"

const app = new Hono()

const body = "hello world!!"
const body2 = "test router"

app.get("/", (c) => c.text(body))
app.get("/test", (c) => c.text(body2))

export default app
