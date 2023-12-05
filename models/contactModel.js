const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"]
    },
    phone: {
        type: String,
        required: [true, "Please add a phone number"]
    }
},{
    timestamp: true
});

module.exports = mongoose.model("Contact", contactSchema);