const express= require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 8000;
const DB_URL = "mongodb+srv://Sumant:123abc@cluster0.lkdht.mongodb.net/lib-sys?retryWrites=true&w=majority"

const authorController = require("./controllers/author.controller");
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");
const checkoutController = require("./controllers/checkout.controller");

const app = express();
app.use(express.json())
app.use(cors())
app.use("/books", bookController)
app.use("/authors", authorController)
app.use("/sections", sectionController)
app.use("/checkout", checkoutController)


const connect = () => {
    return mongoose.connect(DB_URL)
}

app.listen(PORT, async ()=>{
    try {
        await connect();
        console.log(`Running to PORT: ${PORT}`)
    }
    catch(e){
        console.log(e.message)
    }
})