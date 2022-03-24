const express = require("express");
const mongoose = require("mongoose")
const Author = require("../models/author.model");
const Book = require("../models/book.model");
const crudController = require("./crud.controller")

const router = express.Router();

router.get("/", crudController(Author).getAll)

router.get("/:id", crudController(Author).getOne)

// get books by an author using author id
router.get("/:id/books", async ( req, res) => {
    const books = await Book.find({authors: req.params.id});
    res.status(200).json(books)
})

router.post("/", crudController(Author).post)

router.patch("/:id",  crudController(Author).updateOne)

router.patch("/:id/books", async (req, res) => {
//     const { books } = await Author.findById(req.params.id);
//     let newBooks = req.body.books.filter((book)=>books.includes(mongoose.Types.ObjectId(book)))
    // const updateItem = await Author.findByIdAndUpdate(req.params.id,{
        // to push in the data we use $push
        // $push: {books: req.body.books}
        // or // $push: {books: newBooks}

    // });
    // to override the data and add new information everytime
    const updateItem = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(updateItem)
})

router.delete("/:id",  crudController(Author).deleteOne)

module.exports = router


// router.patch("/:id", async (req, res)=>{
//     let updateAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.status(200).json(updateAuthor)

//     // await Author.updateOne({"_id:": req.params.is}, req.body);

//     // const updateAuthor = await Author.findById(req.param.id);
//     // res.status(200).json(updateAuthor);
// })