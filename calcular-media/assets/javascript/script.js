function calcularMediaAluno(priemiraNota, segundaNota, terceiraNota, quartaNota){
  const soma = priemiraNota + segundaNota + terceiraNota + quartaNota;
  const notaAluno = soma / 3;
  return notaAluno;
} 

let resultado = '';

let priemiraNota = parseInt(document.getElementById('n1').value);
let segundaNota = parseInt(document.getElementById('n2').value);
let terceiraNota = parseInt(document.getElementById('n3').value);
let quartaNota = parseInt(document.getElementById('n4').value);

const media = calcularMediaAluno(n1, n2, n3, n4).toFixed(2);

if (media < 7) {
  resultado = 'REPROVADO'
} else {
  resultado = 'APROVADO'
}
console.log(resultado);


// function calcularValor() {  

//     var media = document.getElementById('valorMedia');

//     if(validacao > 10  || validacao <= 0){
//         var erro = 'Digite um numero valido!'
//         media.innerHTML = erro;
//     } else {
//         var resultadoEscrito = 'A sua media é: ' + resultado
//         media.innerHTML = resultadoEscrito;
//     }
    

//     var resukltReset = [n1, n2, n3, n4] = [0, 0, 0, 0];

// }
