let calculador = document.querySelector("#calculador");
let valor = document.querySelector("#valor");
let venda = document.querySelector("#venda");
let retomada = document.querySelector("#retomada")

let quantValor = valor.value;
let quantVenda = venda.value;

let lucro = quantVenda - quantValor;
let porcentagem = Math.round(lucro / quantValor * 100);

function apagaValores(){
    quantValor = 0;
    quantVenda = 0;
    lucro = 0;
    porcentagem = 0;
}

function recalcular(){
    quantValor = valor.value;
    quantVenda = venda.value;

    lucro = quantVenda - quantValor;
    porcentagem = Math.round(lucro / quantValor * 100);
}

function mostrar(mostra){
    document.write(mostra)
}

if(isNaN(porcentagem) || porcentagem === 0 || porcentagem === -Infinity || porcentagem === Infinity) {
    document.getElementById("valor-porcentagem").innerHTML = `<p>${0 + "%"}</p>`;
}else{
    document.getElementById("valor-porcentagem").innerHTML = `<p>${porcentagem + "%"}</p>`;
}

calculador.addEventListener("click", function() {
    
    recalcular();
    
    if(isNaN(porcentagem) || porcentagem === 0 || porcentagem === -Infinity || porcentagem === Infinity) {
        document.getElementById("valor-porcentagem").innerHTML = `<p>${0 + "%"}</p>`;
    }else{
        document.getElementById("valor-porcentagem").innerHTML = `<p>${porcentagem + "%"}</p>`;
    }
    
    apagaValores();
    
});

console.log(porcentagem);