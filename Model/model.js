const mongoose = require("mongoose")



//Create s Schema which represents the model of the user.
const userSchema = new mongoose.Schema({    
    Name: {type: String , required: true } , 
    Email: {type: String , required: true },
    Password: {type: String , required: true , min: 8},
    Address: {type: String , required: true }
});


module.exports = mongoose.model('anshu', userSchema);