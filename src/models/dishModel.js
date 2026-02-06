const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Dish', dishSchema);