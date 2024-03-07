const mongoose = require('mongoose');
const {objectID} = mongoose.Schema;

const PolicySchema = new mongoose.Schema({
    policyName:{
        type: String,
        trim: true,
        required: [true, 'Policy name is required'],
        maxlength: 50,
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Description is required'],
        maxlength: 50,
    },
    price:{
        type: String,
        trim: true,
        required: [true, 'Price is required'],
        maxlength: 50,
    }
},{timestamps: true})

module.exports = mongoose.model("Policy",PolicySchema);