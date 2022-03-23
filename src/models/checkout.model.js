const mongoose = require("mongoose")

const checkoutSchema = new mongoose.Schema({
    books: {type: mongoose.Schema.Types.ObjectId, ref: "book", required: true}
});

const Checkout = mongoose.model("checkout", checkoutSchema);

module.exports = Checkout;