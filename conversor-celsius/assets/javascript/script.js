function converteCelsiusParaFahrenheit(){
  let valorCelsius = parseFloat(document.getElementById('celsius').value)
  
  const valorConvertido = (valorCelsius * 1.8) + 32;

  const resultado = 'O valor de Fahrenheit é: °F ' + valorConvertido;

  document.getElementById('valorFahrenheit').innerHTML = resultado;

  
  
}
