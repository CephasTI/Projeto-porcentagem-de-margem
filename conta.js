let calculador = document.querySelector("#calculador");
let valor = document.querySelector("#valor");
let venda = document.querySelector("#venda");
let retomada = document.querySelector("#retomada")

let quantValor = valor.value;
let quantVenda = venda.value;

let lucro = quantVenda - quantValor;
let porcentagem = Math.round(lucro / quantValor * 100);

function mostrar(mostra){
    document.write(mostra)
}

if(isNaN(porcentagem)) {
    mostrar(0 + "%");
}else{
    mostrar(porcentagem + "%")
}

calculador.addEventListener("click", function() {
    
    location.reload();

});

console.log(porcentagem);