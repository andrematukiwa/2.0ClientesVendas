const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin : 'http://127.0.0.1:5500'}));
const rotas = require("./rotas");

require("./config/dbConfig");


app.use(express.json());
app.use(rotas);

app.listen(8086,(req, res) =>{
    console.log("Servidor rodando");
}
);
