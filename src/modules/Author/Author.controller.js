
// =================================================•create a new author.===========================================================

import authorModel from "../../../Database/models/author.model.js";

export const addAuthor= async (req,res)=>{

try{

    const{name,bio,birthDate,books} =req.body;

    const Author=await authorModel.create({name,bio,birthDate,books})
    res.status(201).json({message:"Author added successfully",Author})

}
catch(error){

    res.status(500).json({message:"Internal server error",error})
}

}




// =================================================•retrieve all authors==========================================================

export const allAuthors= async(req,res)=>{

    try{

const AllAuthors= await authorModel.find()
    res.status(200).json({message:"Success",AllAuthors})

    }
    catch(error){

        res.status(500).json({message:"Internal server error",error})
    }
}


// ======================================================•retrieve an single author by its ID.=====================================================


export const specificAuthor= async (req,res)=>{
    try{
    const {_id}=req.params;
    const anAuthor =await authorModel.findById(_id)
        res.status(200).json({message:"Success",anAuthor})
    
    }catch(error){
    
        res.status(500).json({message:"Internal server error",error})
    
    }}

// ======================================================•update an author by its ID.=====================================================


export const updateAuthor=async(req,res)=>{
try{
const {name}=req.body;    
const {_id}=req.params;

const updatedAuthor= await authorModel.findByIdAndUpdate(_id,{name},{new:true})
res.status(200).json({message:"Author updated Successfully",updatedAuthor})

}catch(error){
    res.status(500).json({message:"Internal server error",error})

  }}

// ======================================================-delete an author by its ID.=====================================================

export const deleteAuthor=async (req,res)=>{

    try{
        const {_id}= req.params;
        const deletedAuthor=await authorModel.findByIdAndDelete(_id)
        res.status(200).json({message:"The Author deleted Successfully"})

    }catch(error){

        res.status(500).json({message:"Internal server error",error})

    }
}


// ======================================================-retrieving an author && a list of books written by them=====================================================



export const authorWithBooks= async(req,res)=>{

try{
const {_id}=req.params;

const AuthorAndBooks=await authorModel.findById(_id).populate([{path:"books"}])

        res.status(200).json({message:"Success",AuthorAndBooks})
}
catch(error){
    res.status(500).json({message:"Internal server error",error})
}

}
// ====================================================== Search function to filter Authors by name or bio=====================================================

export const searchAuthor= async(req,res)=> {
    
    try {
        
const Authors = await authorModel.find({
    name: new RegExp(req.query.name, 'i'),
    bio: new RegExp(req.query.bio, 'i')
}
);
if(!Authors.length){
    res.status(404).json({message:"there are no Authors"})

}
    res.status(200).json({message:"Success",Authors})
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
        console.log(error);
    } 
    
  }


//=================================================================pagination===================================================

  export const AuthorsPagination=async(req,res)=>{

try{

const page=req.query.p || 0;
const AuthorsPerPage=3;
const Authors= await authorModel.find().skip(page*AuthorsPerPage).limit(AuthorsPerPage)

res.status(200).json({message:"success",Authors})

}catch(error){
    res.status(500).json({message:"Internal server error",error})
}


}
