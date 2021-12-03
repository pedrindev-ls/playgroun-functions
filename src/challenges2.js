// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] < 0 || array.length > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
}
if (array.lenght !== 11){
  return 'Array com tamanho incorreto.'
}
let repete = 0;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let difAB = Math.abs(lineA - lineB)
  let difBC = Math.abs(lineB - lineC)
  let difAC = Math.abs(lineA - lineC)
  
  let sumAB = lineA + lineB
  let sumBC = lineB + lineC
  let sumAC = lineA + lineC

  if(lineA < sumBC && lineA > difBC){
    if (lineB < sumAC && lineB > difAC){
      if (lineC < sumAB && lineC > difAB){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
