const form = document.getElementById("form_cadastro")

function cadastrarVenda(){

    const valor = form.querySelector('input[name="valor"]');
    const marca = form.querySelector('input[name="marca"]');
    const quantidade = form.querySelector('input[name="quantidade"]');
    const cpf = form.querySelector('input[name="cpf"]');

    if(!valor.value){
        alert("Informe o Valor");
        return;
    }

    if(!marca.value){
        alert("Informe o Marca");
        return;
    }

    if(!quantidade.value){
        alert("Informe o Quantidade");
        return;
    }

    if(!cpf.value){
        alert("Informe o CPF do cliente");
        return;
    }
    
    
    const obj = {
        Valor: valor.value,
        Marca: marca.value,
        Quantidade: quantidade.value,
        CPFCliente: cpf.value
    }

    const json =JSON.stringify(obj);

    fetch("http://localhost:8086/venda", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Venda cadastrada com sucesso!");
    })

    .catch(error => {
        console.log(error);
        alert("Erro ao cadastrar venda!");
    });

}