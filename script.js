function calculoMassaCorporal(p, a) {
  return p/a*a;
}

let massaCorporal = calculoMassaCorporal(60, 1.70);

function exibirTexto (tag, texto) {
  let campo = document.querySelector (tag)
  campo.innerHTML = texto
}

exibirTexto("h2", `A IMC é ${massaCorporal.toFixed(1)}`)