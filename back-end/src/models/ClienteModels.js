const mongoose = require("mongoose");


const ClienteModelSchema = new mongoose.Schema({
    Nome: String,
    CPF: String,
    Idade: Number,
});


module.exports = mongoose.model("Cliente", ClienteModelSchema);
