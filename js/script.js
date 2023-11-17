function calcularEquacao2grau() {
  var a = parseFloat(document.getElementById("valorA").value);
  var b = parseFloat(document.getElementById("valorB").value);
  var c = parseFloat(document.getElementById("valorC").value);
  var delta = Math.pow(b, 2) - 4 * a * c;

  if (a === 0) {
      document.getElementById("resultado").innerHTML = "Equação de 1º grau!";
      return;
  }

  var equacaoIncompleta = (b === 0 || c === 0) && delta >= 0;

  if (equacaoIncompleta) {
      document.getElementById("resultado").innerHTML = "Equação do 2º grau incompleta!<br/>";
  }

  if (c === 0) {
      var x1 = 0;
      var x2 = -b / a;
      document.getElementById("resultado").innerHTML += "As raízes são X1= " + x1.toFixed(2) + " e X2 = " + x2.toFixed(2); 
  }

  if (b === 0) {
      var x1 = Math.sqrt(-c / a);
      var x2 = -Math.sqrt(-c / a);
      document.getElementById("resultado").innerHTML += "As raízes são X1= " + x1.toFixed(2) + " e X2 = " + x2.toFixed(2); 
  }

  if (!equacaoIncompleta && delta > 0) {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("resultado").innerHTML = "As raízes são X1= " + x1.toFixed(2) + " e X2 = " + x2.toFixed(2);
  } else if (!equacaoIncompleta && delta === 0) {
      var x = -b / (2 * a);
      document.getElementById("resultado").innerHTML = "A raíz dupla é x = " + x.toFixed(2);
  } else if (!equacaoIncompleta) {
      document.getElementById("resultado").innerHTML = "Não há raiz real";
  }
}

function limparInputs() {
  document.getElementById("valorA").value = "";
  document.getElementById("valorB").value = "";
  document.getElementById("valorC").value = "";
  document.getElementById("resultado").innerHTML = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      calcularEquacao2grau();
  }
});