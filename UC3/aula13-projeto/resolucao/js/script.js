let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");

function mudarStep(passo) {
    if(passo == 1) {
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
    } else if(passo == 2) {        
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";

        //buscar os dados preenhidos no passo 1
        let name = document.getElementById("name");
        let email = document.getElementById("email");

        //obter topicos selecionados        
        let topico_1 = document.getElementById("topico_1");
        let topico_2 = document.getElementById("topico_2");
        let topico_3 = document.getElementById("topico_3");

        //preparar elementos para receber os dados inseridos
        let vname = document.getElementById("v-name");
        let vemail = document.getElementById("v-email");
        let vtopics = document.getElementById("v-topics");

        //mostrar os dados no passo 3
        vname.innerHTML = name.value
        vemail.innerHTML = email.value

        let aux_topicos = "";

        if(topico_1.checked == true) {
            aux_topicos += "<li>" +  topico_1.value + "</li>"
        }
        
        if(topico_2.checked == true) {
            aux_topicos += "<li>" +  topico_2.value + "</li>"
        } 

        if(topico_3.checked == true) {
            aux_topicos += "<li>" +  topico_3.value + "</li>"
        } 

        vtopics.innerHTML = aux_topicos

    }
}