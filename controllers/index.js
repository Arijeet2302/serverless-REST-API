const Item = require('../models/items');

exports.createItem = async(req,res) => {
    try {
        const { name, description, price } = req.body;
        await Item.create({ name, description, price });
        res.status(200).send({ message: `Item Created with name ${name}`});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
}

exports.findItems = async(req, res) => {
    try {
        const items = await Item.find();
        res.status(201).send({ message: "All Items Fetched", items: items });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
}

exports.updateItem = async(req, res) => {
    try {
        const { name, description, price } = req.body;
        const item = await Item.find({ _id: req.body.id });
        item.name = name;
        item.description = description;
        item.price = price;
        await Item.save(item);
        res.status(201).send({ message: "Item saved!!"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error }); 
    }
}

exports.deleteItem = async(req, res) => {
    try {
        const deleteItem = await Item.findOneAndDelete({ _id: req.query.id });
        if(!deleteItem) res.status(404).send({ message: "Item cannot found"});
        res.status(201).send({ message: "Item Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
}