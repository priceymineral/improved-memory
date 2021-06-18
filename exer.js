// Mubashir is getting old but he wants to celebrate his 20th or 21st birthday only. It is possible with some basic maths skills. He just needs to select the correct number base with your help!

// For example, if his current age is 22, that's exactly 20 - in base 11. Similarly, 65 is exactly 21 - in base 32 and so on.

// Create a function that takes his current age and returns the given age 20 (or 21) years, with number base in the format specified in the below examples.

// Find the base
// 21 = 65
// 65 - 1 = 64
// 64 / 2 = 32
//  => 65 is 21 in base 32

// 20 = 65
// 65 - 0 = 65
// 65 / 2 = 32 1/2
//  => 65 is 20 in base 32 1/2

// 21 = 22
// 22 - 1 = 21
// 21 / 2 = 10 1/2
//

// 20 = 22
// 22 - 0 = 22
// 22 / 2 = 11
//  => 22 is 20 in base 11

const findBase = (age) => {
  if (age % 2) {
    base = (age - 1) / 2
    return `${age} is 21 in base ${base}`
  } else {
    base = age / 2
    return `${age} is 20 in base ${base}`
  }
}

console.log(findBase(22))

// If the age is even
  // Divide by two and that's 20 in base x

// if the age is odd
  // subtract 1 and divide the result by 2, and that's 21 in base x



// PROBLEM #2
// Reverse the order of the words
// eg "Hi how are you" to "you are how hi"

// input is a string
// output is a string (reversed)

function reverser(str) {
  // split at the spaces
  let strToArr = str.split(" ")
  var revArr = []
  // console.log(strToArr)
  for (var i = strToArr.length - 1; i >= 0; i--) {
    revArr.push(strToArr[i])
  }
  return revArr.join(" ")
}
// split() the input string
// iterate backwards
// place the strings in a new array
// join the string
// return it


// PROBLEM #3
// You are given a 2-dimensional integer matrix where each cell represents the number of coins in that cell
//matrix = [
//   [0, 3, 1, 1],
//   [2, 0, 0, 4]
// ]
// Starting at matrix[0][0]
// Find the max number of coins you can collect by the bottom right corner (in this case matrix[1][3])

// input - 2-d integer matrix
// output - integer
// edge -
// constraints - start at matrix[0][0], can only move right and bottom

// inittialize a count
// compare the right number to the bottom number
// add the LARGER number at that cell to count
// from the new cell, compare right to the bottom
// add the LARGER number at the cell to count
// ...

function coinCollect(matrix) {

  var max = matrix[0].length
  var m = 0
  var n = 0
  var count = matrix[m][n]

  function counter(matrix, m, n) {
    console.log(`m=${m}, n=${n}`)

    if (matrix[m][n + 1] >= matrix[m + 1][n]) {

      count += matrix[m][n + 1]
      if (n+1 >= max) {
        return count
      } else {
        n+=1
        return count + counter(matrix, m, n)
      }

    } else {

      count += matrix[m + 1][n]
      // if m+=1 >= max return count else
      if (m+1 >= max) {
        return count
      } else {
        m+=1
        return count + counter(matrix, m, n)
      }

    }
  }

  return count
}

matrix = [ [0, 3, 1, 1], [2, 0, 0, 4] ]
console.log(coinCollect(matrix))
