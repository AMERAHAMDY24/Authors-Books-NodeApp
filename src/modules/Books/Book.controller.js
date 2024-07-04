import bookModel from "../../../Database/models/book.model.js";

// =================================================-•create a new book.==========================================================

export const addBook=async(req,res)=>{

try{
const {title,content,author,publishedDate}=req.body;

const newBook= await bookModel.create({title,content,author,publishedDate})
res.status(201).json({message:"Book created successfully",newBook})


}catch(error){

    res.status(500).json({message:"Internal server error"})

}
}




// =================================================-•retrieve all books==========================================================

export const AllBooks= async (req,res)=>{
try{

const allBooks =await bookModel.find()
    res.status(200).json({message:"Success",allBooks})

}catch(error){

    res.status(500).json({message:"Internal server error",error})

}

}


// ======================================================-•retrieve a single book by its ID.=====================================================
export const singleBook= async (req,res)=>{
    try{
    const {_id}=req.params;
    const Book =await bookModel.findById(_id)
        res.status(200).json({message:"Success",Book})
    
    }catch(error){
    
        res.status(500).json({message:"Internal server error",error})
    
    }}



// ======================================================-•update a book by its ID.=====================================================

export const updateBook=async(req,res)=>{
try{
const {title}=req.body;    
const {_id}=req.params;

const updatedBook= await bookModel.findByIdAndUpdate(_id,{title},{new:true})
res.status(200).json({message:"Book updated Successfully",updatedBook})

}catch(error){

    res.status(500).json({message:"Internal server error",error})

}
}
// ======================================================-delete a book by its ID.=====================================================

export const deleteBook=async (req,res)=>{

    try{
        const {_id}= req.params;
        const deletedBook=await bookModel.findByIdAndDelete(_id)
        res.status(200).json({message:"The Book deleted Successfully"})

    }catch(error){

        res.status(500).json({message:"Internal server error",error})

    }
}


// ====================================================== Search function to filter books by title or author=====================================================

  export const searchBooks= async(req,res)=> {
    
    try {
        
const Book = await bookModel.find({
    title: new RegExp(req.query.title, 'i'),
    author: new RegExp(req.query.author, 'i')
}
);
if(!Book.length){
    res.status(404).json({message:"Book not found"})

}
    res.status(200).json({message:"Success",Book})
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
        console.log(error);
    } 
    
  }
//=================================================================pagination===================================================
  


export const BooksPagination=async(req,res)=>{

    try{
    
    const page=req.query.p || 0;
    const BooksPerPage=3;
    const Books= await bookModel.find().skip(page*BooksPerPage).limit(BooksPerPage)
    
    res.status(200).json({message:"success",Books})
    
    }catch(error){
        res.status(500).json({message:"Internal server error",error})
    }
}    




