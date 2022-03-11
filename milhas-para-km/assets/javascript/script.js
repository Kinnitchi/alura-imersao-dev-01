function coverterMilhasParaQuilometros() {
  let valorMPH = parseFloat(document.getElementById('mph').value)
  const divisao = 1.609344;
  const resultado = parseFloat(valorMPH / divisao).toFixed(3);
  console.log(typeof resultado)
  
  const resposta = 'O valor em Milhas é: ' + resultado;

  document.getElementById('valorKM').innerHTML = resposta
}

