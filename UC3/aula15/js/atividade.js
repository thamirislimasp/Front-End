let vitrine = $("#vitrine");

    console.log(vitrine);   
    
    //AJAX 
    $.ajax({
        // Origem da informação
        "url": "https://demo7687802.mockable.io/produtos",
        // Formato da requisição
        "type": "GET",
        // Formato de resposta
        "dataType": "JSON",
        // Status de carregando
        "beforSend": () => { },
        // Status de sucesso
        "success": (resposta) => {
        
        aux_vitrine = "";

        produtos.forEach(resposta.produtos => {
            aux_vitrine +=    `<div class="col-md-3"> 
                                    <div class="card">
                                        <h5 class="card-header"> ${produtos.name}</h5>
                                        <div class="card-body">
                                            <div class="img-grande">
                                                <img src="${produtos.img}">
                                            </div>  

                                            <p>${produtos.price.toLocaleString('pt-br', {style: "currency", "currency": "BRL"})}</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>`
        });    
  
        vitrine.html(aux_vitrine);     
        
    })


    
        

    



    

    


