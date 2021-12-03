// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
