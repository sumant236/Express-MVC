
const getAll = (model) => async (req, res) => {
    let items = await model.find({});
    res.status(200).json(items)
}

const getOne = (model) => async ( req, res) => {
    let item = await model.findById(req.params.id);
    res.status(200).json(item)
}

const createOne = (model) => async (  req, res) => {
    let item = await model.create(req.body);
    res.status(201).json(item)
}

const updateOne = (model) => async ( req, res) => {
    let updateItem = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateItem)

    // await model.update({"_id:": req.params.is}, req.body);

    // const updateItem = await model.findById(req.param.id);
    // res.status(200).json(updateItem);
}

const deleteOne = (model) => async ( req, res)=>{
    let deleteItem = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteItem)
}

module.exports = (model)=>({
    post: createOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model)
})