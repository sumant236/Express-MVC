const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller")

const router = express.Router();


router.get("/", async (req, res) => {
    const { isCheckedOut, author, section } = req.query;
    let criteria = {};
    if(isCheckedOut){
        criteria.isCheckedOut = isCheckedOut
    }
    if(author){
        criteria.authors = author
    }
    if(section){
        criteria.section = section
    }
    const books = await Book.find(criteria);
    res.status(200).json(books)
})

router.get("/:id", crudController(Book).getOne)

router.post("/", crudController(Book).post)

router.patch("/:id",  crudController(Book).updateOne)

// router.patch("/:id", (req, res)=>{
//     updateOne(Book, req, res)

//     // await Book.updateOne({"_id:": req.params.is}, req.body);

//     // const updateBook = await Book.findById(req.param.id);
//     // res.status(200).json(updateBook);
// })

router.delete("/:id",  crudController(Book).deleteOne)

module.exports = router