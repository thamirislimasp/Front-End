let imagemGrande = $("#imagem-produto");
let imgThumb1 = $("#img-thumb-1");
let imgThumb2 = $("#img-thumb-2");
let imgThumb3 = $("#img-thumb-3");

// COM BIBLIOTECA
imgThumb1.on("mouseover", function(){
    imagemGrande.prop("src", "imagem-1.webp")
});

imgThumb2.on("mouseover", function(){
    imagemGrande.prop("src", "imagem-2.webp")
});

imgThumb3.on("mouseover", function(){
    imagemGrande.prop("src", "imagem-3.webp")
});