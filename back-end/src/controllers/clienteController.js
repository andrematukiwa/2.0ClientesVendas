const Cliente = require("../models/ClienteModels");


module.exports = {
    async read(req, res){
        const clienteList = await Cliente.find();
        return res.json(clienteList);
    },


    async create(req, res){
        const {Nome, CPF, Idade} = req.body;


        if(!Nome || !CPF || !Idade){
            return res.status(400).json({error: "Campo vazio"});
        }


        const clienteCriado = await Cliente.create({
            Nome,
            CPF,
            Idade
        });
        return res.json(clienteCriado);
    },
    async delete(req,res){
        const{id} = await req.params;
        const clienteDeletada = await Cliente.findOneAndDelete({_id:id});


        if(clienteDeletada){
            return res.json(clienteDeletada);
        }
        return res.status(401).json({error: "ID não encontrado"});
    },
    async update(req,res){
        const{id} = await req.params;
        const {Nome,CPF,Idade} = req.body;
        const cliente = await Cliente.findOne({_id:id});


        if(!Nome || !CPF || !Idade){
            return res.status(400).json({error: "Campo vazio"});
        }
        if(!cliente){
            return res.status(401).json({error: "ID não encontrado"});
        }


            cliente.Nome = Nome;
            cliente.CPF = CPF;
            cliente.Idade = Idade;


            await agua.save();


            return res.json(cliente);


    },
    async procura(req,res){
        const{id} = await req.params;
        const clienteProcura = await Cliente.findOne({_id:id});


        if(clienteProcura){
            return res.json(clienteProcura);
        }
        return res.status(401).json({error: "ID não encontrado"});
    }
}
