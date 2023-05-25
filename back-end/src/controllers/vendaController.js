const Venda = require("../models/VendaModels");
const pessoa = require("../models/ClienteModels")


module.exports = {
    async read(req, res){
        const vendaList = await Venda.find();
        return res.json(vendaList);
    },


    async create(req, res){
        const {Valor, Marca, Quantidade, CPFCliente} = req.body;


        if(!Valor || !Marca || !Quantidade || !CPFCliente){
            return res.status(400).json({error: "Campo vazio"});
        }

        const cliente = await pessoa.findOne({CPF:CPFCliente});
        if(!cliente){
            return res.status(403).json({error: "Cliente não encontrado"});
        }
        
        const vendaCriado = await Venda.create({
            Valor,
            Marca,
            Quantidade,
            CPFCliente
        });
        return res.json(vendaCriado);
    },
    async delete(req,res){
        const{id} = await req.params;
        const vendaDeletada = await Venda.findOneAndDelete({_id:id});


        if(vendaDeletada){
            return res.json(vendaDeletada);
        }
        return res.status(401).json({error: "ID não encontrado"});
    },
    async update(req,res){
        const{id} = await req.params;
        const {Valor,Marca,Quantidade,Cliente} = req.body;
        const venda = await Venda.findOne({_id:id});


        if(!Valor || !Marca || !Quantidade || !Cliente){
            return res.status(400).json({error: "Campo vazio"});
        }
        if(!venda){
            return res.status(401).json({error: "ID não encontrado"});
        }
        const cliente = await pessoa.findOne({_id:Cliente});
        if(!cliente){
            return res.status(403).json({error: "Cliente não encontrado"});
        }


            venda.Valor = Valor;
            venda.Marca = Marca;
            venda.Quantidade = Quantidade;
            venda.Cliente = Cliente;


            await venda.save();


            return res.json(venda);


    },
    async procura(req,res){
        const{id} = await req.params;
        const vendaProcura = await Venda.find({Cliente:id});
        const clienteProcura = await pessoa.find({_id:id});

        if(!vendaProcura ||!clienteProcura){
            return res.status(401).json({error: "Cliente não encontrado"});
            
        }
        return res.json(vendaProcura);
    }
}
