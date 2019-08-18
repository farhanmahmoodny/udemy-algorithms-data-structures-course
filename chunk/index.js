// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let newArray = []
  // Last element solution
  // for (let elem of array) {
  //   let last = newArray[newArray.length-1]
  //   if (!last || last.length === size) {
  //     newArray.push([elem])
  //   } else {
  //     last.push(elem)
  //   }
  // }

  // Slice function solution
  let i = 0
  while (i < array.length){
    newArray.push(array.slice(i, i+size))
    i += size
  }
  return newArray
}

module.exports = chunk;
