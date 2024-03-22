// Add some interactivity to the website

        // Primeiro card
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var botao = document.getElementById("btn_continue");
        var informacoes = document.getElementById("informacoes");

        var nomes = [];
        var emails = [];
        var informacoesL = [];    


        // Botão primeiro card
        botao.addEventListener("click", function (){
          var topics = document.getElementById("topics").style.display = "block";
          var registro = document.getElementById("main").style.display = "none";

            nomes.push(nome.value)
            emails.push(email.value)
            informacoesL.push(informacoes.value)

            nome.value = ""
            email.value = ""
            informacoes.value = ""
            
                        
            mostrarInformacoes();
        });

        // Segundo Card
        var one = document.getElementById("one");
        var two = document.getElementById("two");
        var three = document.getElementById("three");
        var botao2 = document.getElementById("btn_continue_2");

        var um = [];
        var dois = [];
        var tres = []; 
        var selecionados = [];
        
        botao2.addEventListener("click", function (){
          var resultado = document.getElementById("resultado").style.display = "block";
          var topics = document.getElementById("topics").style.display = "none";

          um.push(one.value)
          dois.push(two.value)
          tres.push(three.value)        
          
          for (var cont = 0; cont < topics.length; cont++){
            if(topics[cont].click){
              selecionados.push(topics[cont].value)
            }
          }

          mostrarInformacoes()

        });

        function mostrarInformacoes (){
          var aux_card_1 = "";
            
            for (var cont = 0; cont < nomes.length; cont++) {
                aux_card_1 +=  '<p> Name: ' + nomes[cont] + '</p>'
                                + '<p> E-mail: ' + emails[cont] + '</p>'
                                + '<br>'
                                + '<p>Topics:' + selecionados[cont] + '</p>'
                //                 + '<ul>'
                //                 + '<li>' + '</li>'
                //                 + '<li>' + '</li>'
                //                 + '<li>' + '</li>'
                // aux_card_1 += '</ul>';
            }  

            informacoes.innerHTML = aux_card_1;            
        };   
        
        

