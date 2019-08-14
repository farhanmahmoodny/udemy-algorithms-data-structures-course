// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //equal method
  let reversed = str.split('').reverse().join('')
  return reversed === str

  //if...else method
  // if(str.split('').reverse().join('') === str) {
  //   return true
  // } else {
  //   return false
  // }

  //every function method
  // return str.split('').every((char, i) => {
  //   return char === str[str.length - i - 1]
  // })
}

module.exports = palindrome;
