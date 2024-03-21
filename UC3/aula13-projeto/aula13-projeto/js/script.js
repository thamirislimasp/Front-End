// Add some interactivity to the website

        // Primeiro card
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var botao = document.getElementById("btn_continue");
        var informacoes = document.getElementById("informacoes");

        var nomes = [];
        var emails = [];
        var informacoesL = [];

        //Puxar os slides
        // var um = document.getElementById("um");
        // var dois = document.getElementById("dois");
        // var tres = document.getElementById("tres");

        let slideIndex = 0;
        showSlides();
      
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("card");
          let dots = document.getElementsByClassName("dot");
          
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }


        botao.addEventListener("click", function (){
            nomes.push(nome.value)
            emails.push(email.value)
            informacoesL.push(informacoes.value)

            nome.value = ""
            email.value = ""
            informacoes.value = ""

            
            mostrarInformacoes();
        });

        var aux_card_1 = "";

        function mostrarInformacoes (){
            
            for (var cont = 0; cont < nomes.length; cont++) {
                aux_card_1 +=  '<p> Name: ' + nomes[cont] + '</p>'
                                + '<p> E-mail: ' + emails[cont] + '</p>'
                                + '<br>'
                                + '<p>Topics:</p>'
                //                 + '<ul>'
                //                 + '<li>' + '</li>'
                //                 + '<li>' + '</li>'
                //                 + '<li>' + '</li>'
                // aux_card_1 += '</ul>';
            }             
            informacoes.innerHTML = aux_card_1;

            
        };   
        
        

