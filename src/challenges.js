// Desafio 1
function compareTrue(p1, p2) {
    if (p1 === true && p2 === true){
      return true
    } else {
      return false
    }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(p1) {
  return   p1[p1.length - 1] + ', ' + p1[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + ties
  return pontos
}

// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  let dis1 = cat1 - mouse
  let dis2 = cat2 - mouse
  if (dis1 === dis2){
    return 'os gatos trombam e o rato foge'
  } else if (dis2 > dis1){
    return 'cat1'
  } else if (dis1 > dis2) {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] % 3 === 0 && array[i] % 5 === 0){
      array.splice(i, 1, 'fizzBuzz')
    } else if (array[i] % 3 === 0){
      array.splice(i, 1, 'fizz')
    } else if (array[i] % 5 === 0){
      array.splice(i, 1, 'buzz')
    } else {
      array.splice(i, 1, 'bug!')
    }
  }
  return array
}

// Desafio 9
function encode(string) {
  for (let i = 0; i < string.length; i++){
    if(string[i] === 'a'){
      string.replace(string[i], 1)
    } else if (string[i] === 'e'){
      string.replace(string[i], 2)
    } else if (string[i] === 'i'){
      string.replace(string[i], 3)
    } else if (string[i] === 'o'){
      string.replace(string[i], 4)
    } else if (string[i] === 'u'){
      string.replace(string[i], 5)
    }
  }
  return string 
}
function decode(string) {
  for (let i = 0; i < string.length; i++){
    if(string[i] === '1'){
      string.replace(string[i], 'a')
    } else if (string[i] === '2'){
      string.replace(string[i], 'e')
    } else if (string[i] === '3'){
      string.replace(string[i], 'i')
    } else if (string[i] === '4'){
      string.replace(string[i], 'o')
    } else if (string[i] === '5'){
      string.replace(string[i], 'u')
    }
  } 
  return string 
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
