import { Router } from "express";
import * as bookController from "./Book.controller.js"

const bookRouter=Router();

bookRouter.post("/addBook",bookController.addBook)
bookRouter.get("/allBooks",bookController.AllBooks)
bookRouter.get("/singleBook/:_id",bookController.singleBook)

bookRouter.patch("/updateBook/:_id",bookController.updateBook)
bookRouter.delete("/deleteBook/:_id",bookController.deleteBook)

bookRouter.get("/searchBooks",bookController.searchBooks)
bookRouter.get("/BooksPerPage",bookController.BooksPagination)








export default bookRouter;