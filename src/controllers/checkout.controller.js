const express = require("express");
const Checkout = require("../models/checkout.model");

const router = express.Router();

router.get("/", async (req, res)=>{
    let checkouts = await Checkout.find({});
    res.status(200).json(checkouts)
})

router.get("/:id", async (req, res)=>{
    let checkouts = await Checkout.findById(req.params.id);
    res.status(200).json(checkouts)
})

router.post("/", async (req, res)=>{
    let createCheckout = await Checkout.create(req.body);
    res.status(201).json(createCheckout)
})

router.patch("/:id", async (req, res)=>{
    let updateCheckout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateCheckout)

    // await Checkout.updateOne({"_id:": req.params.is}, req.body);

    // const updateCheckout = await Checkout.findById(req.param.id);
    // res.status(200).json(updateCheckout);
})

router.delete("/:id", async (req, res)=>{
    let deleteCheckout = await Checkout.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteCheckout)
})


module.exports = router