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
      if (n + 1 >= max) {
        return count
      } else {
        n += 1
        return count + counter(matrix, m, n)
      }

    } else {

      count += matrix[m + 1][n]
      // if m+=1 >= max return count else
      if (m + 1 >= max) {
        return count
      } else {
        m += 1
        return count + counter(matrix, m, n)
      }

    }
  }

  return count
}

matrix = [[0, 3, 1, 1], [2, 0, 0, 4]]
console.log(coinCollect(matrix))

// Solution with Map()
const solve = (matrix) => {
  let m = matrix[0] ? matrix[0].length : -1;
  let n = matrix.length;
  let memo = new Map();

  let help = (i, j) => {
    let key = i + ',' + j;
    if (memo.has(key)) return memo.get(key);
    if (i === n - 1 && j === m - 1) return matrix[i][j];
    if (i >= n || j >= m) return 0;
    memo.set(key, matrix[i][j] + Math.max(help(i + 1, j), help(i, j + 1)))

    return memo.get(key);
  }
  return help(0, 0);
}

// // # PROBLEM 4
// Given a binary tree root, return an inorder traversal of root as a list.
// Bonus: Can you do this iteratively?
// Constraints
// n ≤ 100,000 where n is the number of nodes in root

// PROBLEM 5
// Given a list of integers nums, return a new list such that each element at index i of the new list is the product of all the numbers in the original list except the one at i. Do this without using division.
// Example 1
// Input
// nums = [1, 2, 3, 4, 5]
// Output
// [120, 60, 40, 30, 24]
// Explanation
// 120 = 2 * 3 * 4 * 5, 60 = 1 * 3 * 4 * 5, and so on.
// Example 2
// Input
// nums = [3, 2, 1]
// Output
// [2, 3, 6]

// PROBLEM 6
// Given a singly linked list node, return its reverse.

// Bonus: Can you do this in \mathcal{O}(1)O(1) space?

// Constraints

// n ≤ 100,000 where n is the number of nodes in node
// Example 1
// Input
// Visualize
// node = [1, 2, 3, 4]
// Output
// Visualize
// [4, 3, 2, 1]
// Example 2
// Input
// Visualize
// node = [0, 1]
// Output
// Visualize
// [1, 0]

//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix);

const rotator = (grid) => {
  var newLength = grid[0].length;
  // console.log('OG new length: ', newLength);
  var rotated = [];

  // iterate over rows
  for (let i = 0; i < grid.length; i++) {
    newLength -= 1;
    var row = []
    for (let j = 0; j < grid[i].length; j++) {
      // console.log('new length: ', newLength);
      row.push(grid[j][newLength]);
      // console.log(`(${i}, ${j}) => (${j}, ${newLength})`);
    };
    rotated.push(row);
  };

  return rotated;
};

let rotated = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
]

if (JSON.stringify(rotated) === JSON.stringify(rotator(matrix))) {
  console.log('You got it, dude!')
} else {
  'watafak!';
}
rotator(matrix);

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// PROBLEM 8
// Given two lowercase alphabet strings s1 and s2, determine if s1 is a subsequence of s2.
// function solve(s1, s2) {
//   if (!s2 && !s1) return true; // if both empty, s1 IS a subsequence of s2
//   if (!s2) return false; // if only s2 is empty, s1 IS NOT a subsequence (unless also empty)
//   if (s2.includes(s1)) return true;
//   if (s1.length === 1) return false;

//   for (let i = 0; i <= s1.length - 2; i++) {
//     if (s2.indexOf(s1[i]) === -1) return false;

//     if (s2.indexOf(s1[i + 1], s2.indexOf(s1[i]) + 1) > s2.indexOf(s1[i])) {

//       if (s1.length === 2) return true;
//       if (s2.indexOf(s1[i + 2], i + 2) > s2.indexOf(s1[i + 1])) {
//         continue;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }

//     return true;
//   }
// }

for function solve(s1, s2) {
  if (s2.includes(s1)) return true;
  if (s1.length === 1) return false;
  if (s1.length === s2.length && s1 !== s2) return false;
  // save the last location of all the letters
  for (var i = 0; i < s1.length - 1; i++) {
    let currentLetter = s1[i]; // a, a
    let nextLetter = s1[i + 1]; // a, a

    if (s2.includes(currentLetter)) { // true
      lastLocation =
          var index = s2.indexOf(currentLetter, i); // index = 1
    } else {
      return false;
    }

    if (s2.indexOf(s1[i + 1], index + 1) > index) {

      if (s1[i + 2]) {
        continue; //
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  return true;
}
}