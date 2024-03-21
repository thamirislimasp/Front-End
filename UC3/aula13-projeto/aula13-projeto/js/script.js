// Add some interactivity to the website

        // Primeiro card
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var botao = document.getElementById("btn_continue");
        var informacoes = document.getElementById("informacoes");

        var nomes = [];
        var emails = [];
        var informacoesL = [];


        botao.addEventListener("click", function(){
            nomes.push(nome.value)
            emails.push(email.value)
            informacoesL.push(informacoes.value)

            nome.value = ""
            email.value = ""

            mostrarInformacoes();
        });

        function mostrarInformacoes (){
            var aux = "";

            for (var cont = 0; cont < nomes.length; cont++) {
                aux +=  '<p> Name: ' + nomes[cont] + '</p>'
                      + '<p> E-mail: ' + emails[cont] + '</p>'
                      + '<br>'
                      + '<p>Topics:</p>'
                      + '<ul>'
                            + '<li>' + '</li>'
                            + '<li>' + '</li>'
                            + '<li>' + '</li>'
                aux += '</ul>';
            }            
        }

        informacoes.html(aux);


        // Para segundo card
        var opcao = document.getElementsByClassName("opcao");
        var i;

        for (i = 0; i < opcao.length; i++) {
            opcao[i].addEventListener("click", function() {
            this.classList.toggle("active");            
            });
        }
