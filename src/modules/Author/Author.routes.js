import { Router } from "express";
import * as authorController from "./Author.controller.js"

const authorRouter=Router();
authorRouter.post("/addAuthor",authorController.addAuthor)
authorRouter.get("/getAll",authorController.allAuthors)
authorRouter.get("/singleAuthor/:_id",authorController.specificAuthor)
authorRouter.patch("/updateAuthor/:_id",authorController.updateAuthor)
authorRouter.delete("/deleteAuthor/:_id",authorController.deleteAuthor)
authorRouter.get("/authorWithBooks/:_id",authorController.authorWithBooks)
authorRouter.get("/searchAuthor",authorController.searchAuthor)
authorRouter.get("/AuthorsPerPage",authorController.AuthorsPagination)





export default authorRouter;