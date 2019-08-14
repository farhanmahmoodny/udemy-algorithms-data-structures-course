// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //if...else method
  // if(n === 0) {
  //   return n
  // }else if(Math.sign(n) === 1) {
  //   return parseInt(n.toString().split('').reverse().join(''))
  // } else {
  //   let newN = n.toString().slice(1).split('').reverse().join('')
  //   return parseInt('-' + newN)
  // }

  //alternate method
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
