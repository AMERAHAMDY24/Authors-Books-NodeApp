import express from "express"
import { dbConnection } from "./Database/dbConnection.js"
import bookRouter from "./src/modules/Books/Book.routes.js";
import authorRouter from "./src/modules/Author/Author.routes.js";
const app = express();
const port = 5000;

app.use(express.json())
app.use("/books",bookRouter)
app.use("/authors",authorRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))