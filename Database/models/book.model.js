import mongoose from "mongoose";

const{Schema,model }=mongoose;
const bookSchema= Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
author:{
    type:String,
    ref:"Author",
    required:true
},
publishedDate:{
type:Date,
default:new Date()
}

},

{
        timestamps:true,
        versionKey:false
    }
)




export default  mongoose.models.Book ||  model ("Book",bookSchema)