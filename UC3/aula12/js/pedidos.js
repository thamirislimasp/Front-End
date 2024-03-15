let historico_pedidos = [
    {
    nome_cliente: "Mykoll",
    cpf: 12345678912,
    data_nasc: "11/11/1988"
    }
]

let pedidos = [
    {
        id_pedido: 1,
        total: 100.00,
        status: "Pago",
        itens: 2
    },
    {
        id_pedido: 2,
        total: 120.00,
        status: "Pendente",
        itens: 1
    }
]

historico_pedidos.map(dados_cliente =>{
    // Mostrar o nome do cliente no HTML
    document.getElementById("nome").innerHTML = dados_cliente.nome_cliente

    // Mostrar o CPF do cliente no HTML
    document.getElementById("cpf").innerHTML = dados_cliente.cpf

    // Mostrar o data de nascimento do cliente no HTML
    document.getElementById("data-nasc").innerHTML = dados_cliente.data_nasc
})

let divHistorico = document.getElementById("historico");
let aux = "";


pedidos.map(item =>{
    aux += "<p>ID Pedido: " + item.id_pedido + "</p>"
    aux += "<p>Status: " + item.status + "</p>"
    aux += "<p>Valor total: " + item.total + "</p>"
    aux += "<p>Qtd (itens): " + item.itens + "</p>"
    aux += "<hr>"    
})

divHistorico.innerHTML = aux;