let formulario = $("#form-cep");

formulario.on("submit", () =>{
    event.preventDefault();

    console.log(formulario.cep);

    let cep = $("#cep").val()
    //console.log(formulario[0].cep.value);
    console.log(cep);

    //AJAX - Requsição de consulta do CEP
    $.ajax({
        // Origem da informação
        "url": "http://cep.republicavirtual.com.br/web_cep.php",
        // Formato da requisição
        "type": "GET",
        // Formato de resposta
        "dataType": "JSON",
        // Quais os parametros que a origem espera
        "data": "cep="+ cep +"&formato=JSON",
        // Status de carregando
        "beforSend": () => { },
        // Status de sucesso
        "success": (resposta) => {
            console.log(resposta.logradouro);
        }
    })

})
