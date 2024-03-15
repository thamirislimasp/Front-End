let formFuncionario = document.getElementById("form-funcionario");
let relatorio = document.getElementById("relatorio");

formFuncionario.addEventListener('submit', (event) => {
    event.preventDefault();

    //Variáveis para uso de Cálculos
    let inss    = 0;
    let irpf    = 0;
    let vt      = 0;
    let liquido = 0;

    //Variáveis das DIVs HTML
    let nomeFunc        = document.getElementById("nome-func");
    let cargoFunc       = document.getElementById("cargo-func");
    let dpFunc          = document.getElementById("dp-func");
    let salarioFunc     = document.getElementById("salario-base");
    let proventoFunc    = document.getElementById("provento-salario");
    let liquidoFunc     = document.getElementById("salario-liquido");
    let inssFunc        = document.getElementById("desc-inss");
    let irpfFunc        = document.getElementById("desc-irpf");
    let vtFunc          = document.getElementById("desc-vt");

    if(formFuncionario.salario.value <= 1212)
        inss = formFuncionario.salario.value * 0.075;
    else if(formFuncionario.salario.value > 1212 && formFuncionario.salario.value <= 2427.35)
        inss = formFuncionario.salario.value * 0.09;
    else if(formFuncionario.salario.value> 2427.35 && formFuncionario.salario.value <= 3641.03)
        inss = formFuncionario.salario.value * 0.12;
    else if(formFuncionario.salario.value > 3641.03 && formFuncionario.salario.value <= 7087.22)
        inss = formFuncionario.salario.value * 0.14;

    if(formFuncionario.salario.value > 1903.98 && 
        formFuncionario.salario.value <= 2826.65)
        irpf = (formFuncionario.salario.value - inss) * 0.075;
    else if(formFuncionario.salario.value > 2826.65 && 
            formFuncionario.salario.value <= 3751.06)
        irpf = (formFuncionario.salario.value - inss) * 0.15;
    else if(formFuncionario.salario.value > 3751.06 && 
            formFuncionario.salario.value <= 4664.68)
        irpf = (formFuncionario.salario.value - inss) * 0.225;
    else if(formFuncionario.salario.value > 4664.68)
        irpf = (formFuncionario.salario.value - inss) * 0.275;
    
    vt = formFuncionario.salario.value * 0.06;

    liquido = formFuncionario.salario.value - inss - irpf - vt;

    relatorio.style.display = "block";

    nomeFunc.innerHTML      = formFuncionario.nome.value;
    cargoFunc.innerHTML     = formFuncionario.cargo.value;
    dpFunc.innerHTML        = formFuncionario.departamento.value;
    salarioFunc.innerHTML   = `${Number(formFuncionario.salario.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    inssFunc.innerHTML      = `${inss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    irpfFunc.innerHTML      = `${irpf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    vtFunc.innerHTML        = `${vt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    proventoFunc.innerHTML  = `${Number(formFuncionario.salario.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    liquidoFunc.innerHTML   = `${liquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

});