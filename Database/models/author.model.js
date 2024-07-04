import mongoose from "mongoose";
import { type } from "os";

const{Schema,model }=mongoose;
const authorSchema= Schema(
    {
        name:{
            type:String,
            required:true
        },
        bio:{
            type:String,
        },
    birthDate:{
    type:Date
},
books:[{
BooKId:{
    type:Schema.Types.ObjectId,
    ref:"Book"
}


}]


},

{
        timestamps:true,
        versionKey:false
    }
)




export default  mongoose.models.Author ||  model ("Author",authorSchema)