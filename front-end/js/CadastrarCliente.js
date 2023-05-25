const form = document.getElementById("form_cadastro")

function cadastrarCliente(){

    const nome = form.querySelector('input[name="nome"]');
    const cpf = form.querySelector('input[name="cpf"]');
    const idade = form.querySelector('input[name="idade"]');

    if(!nome.value){
        alert("Informe o Nome");
        return;
    }

    if(!cpf.value){
        alert("Informe o CPF");
        return;
    }

    if(!idade.value){
        alert("Informe o Idade");
        return;
    }
    
    const obj = {
        Nome: nome.value,
        CPF: cpf.value,
        Idade: idade.value
    }

    const json =JSON.stringify(obj);

    fetch("http://localhost:8086/cliente", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Cliente cadastrado com sucesso!");
    })

    .catch(error => {
        console.log(error);
        alert("Erro ao cadastrar cliente!");
    });

}