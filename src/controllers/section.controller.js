const express = require("express");
const Book = require("../models/book.model");
const Section = require("../models/section.model");
const crudController = require("./crud.controller")

const router = express.Router();

router.get("/", crudController(Section).getAll)

router.get("/:id", crudController(Section).getOne)

router.get("/:id/books", async (req, res) => {
    const { isCheckedOut } = req.query;
    let criteria = {section: req.params.id};
    if(isCheckedOut){
        criteria.isCheckedOut = isCheckedOut
    }
    const books = await Book.find(criteria);
    res.status(200).json(books)
})

router.post("/", crudController(Section).post)

router.patch("/:id",  crudController(Section).updateOne)

router.delete("/:id",  crudController(Section).deleteOne)

module.exports = router