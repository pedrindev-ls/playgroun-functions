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
function splitSentence(string) {
  return string.split(" ")
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
function highestCount(array) {
  const ordem = array.sort(function(a, b){return a-b}/*Site de Referência: https://www.w3schools.com/jsref/jsref_sort.asp*/)
  let cont = 0;
  let best = ordem[ordem.length - 1]
  for (let i = 0; i < ordem.length; i++){
    let funciona = ordem[i]
    if(best === funciona){
      cont = cont + 1
    }
  }
  return cont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = Math.abs(mouse - cat1)
  let dis2 = Math.abs(mouse - cat2)
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
  let palav = ''
  for (let i = 0; i < string.length; i++){
    if(string[i] == 'a'){
      palav += '1'
    } else if (string[i] == 'e'){
      palav += '2'
    } else if (string[i] == 'i'){
      palav += '3'
    } else if (string[i] == 'o'){
      palav += '4'
    } else if (string[i] == 'u'){
      palav += '5' 
    } else {
      palav += string[i]
    }
  }
  return palav 
}
function decode(string) {
  let palav = ''
  for (let i = 0; i < string.length; i++){
    if(string[i] == '1'){
      palav += 'a'
    } else if (string[i] == '2'){
      palav += 'e'
    } else if (string[i] == '3'){
      palav += 'i'
    } else if (string[i] == '4'){
      palav += 'o'
    } else if (string[i] == '5'){
      palav += 'u' 
    } else {
      palav += string[i]
    }
  }
  return palav 
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
