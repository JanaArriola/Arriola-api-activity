const mongoose = require('mongoose');

// This is the "Rule Book" for a Room
const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    features: [String],
});

module.exports = mongoose.model('Room', roomSchema);