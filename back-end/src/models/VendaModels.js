const mongoose = require("mongoose");


const VendaModelSchema = new mongoose.Schema({
    Valor: Number,
    Marca: String,
    Quantidade: Number,
    Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
    }
});

module.exports = mongoose.model("Venda", VendaModelSchema);