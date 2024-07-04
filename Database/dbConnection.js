// mongodb://localhost:27017/notes-app => url local db

import mongoose from "mongoose";


export const dbConnection=async()=>{
try{
await mongoose.connect("mongodb://localhost:27017/AuthorBooks-app")
console.log("database connected successfully");
}catch(error){
console.log(error);
}

}

dbConnection()

