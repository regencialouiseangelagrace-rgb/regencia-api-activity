const Chef = require('../models/chefModel');

// Get all chefs
const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new chef
const createChef = async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllChefs,
    createChef,
};
