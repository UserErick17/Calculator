


var primeiroValorInput = document.getElementById('primeiroValor');
var segundoValorInput = document.getElementById('segundoValor');
var operacaoInput = document.getElementById('operacao');
var but = document.getElementById('but');
var caixaResult = document.getElementById("result")

var primeiroValor = "";
var segundoValor = "";
var operacao = "";

function calcular() {
  primeiroValor = primeiroValorInput.value;
  segundoValor = segundoValorInput.value;
  operacao = operacaoInput.value;

  if (operacao == 1) {
    resultado = primeiroValor / segundoValor;
    
  } else if (operacao == 2) {
    resultado = primeiroValor * segundoValor;
    
  } else if (operacao == 3) {
    resultado = parseInt(primeiroValor) + parseInt(segundoValor);
    
  } else if (operacao == 4) {
    resultado = primeiroValor - segundoValor;
    
  } else {
    
  }

  let input = document.getElementById("result").innerHTML = resultado;
  input.value = resultado;
  
  /* Inclui o input no elemento body */
  document.body.appendChild( h2 )
}

but.addEventListener('click', function() {
  calcular();
});


