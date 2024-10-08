///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// PROBLEM #2
// Reverse the order of the words
// eg "Hi how are you" to "you are how hi"

// input is a string
// output is a string (reversed)

function reverser(str) {
  // split at the spaces
  let strToArr = str.split(" ");
  var revArr = [];
  // console.log(strToArr)
  for (var i = strToArr.length - 1; i >= 0; i--) {
    revArr.push(strToArr[i]);
  }
  return revArr.join(" ");
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
// .
function coinCollect(matrix) {
  var max = matrix[0].length;
  var m = 0;
  var n = 0;
  var count = matrix[m][n];

  function counter(matrix, m, n) {
    console.log(`m=${m}, n=${n}`);

    if (matrix[m][n + 1] >= matrix[m + 1][n]) {
      count += matrix[m][n + 1];
      if (n + 1 >= max) {
        return count;
      } else {
        n += 1;
        return count + counter(matrix, m, n);
      }
    } else {
      count += matrix[m + 1][n];
      // if m+=1 >= max return count else
      if (m + 1 >= max) {
        return count;
      } else {
        m += 1;
        return count + counter(matrix, m, n);
      }
    }
  }

  return count;
}

// matrix = [[0, 3, 1, 1], [2, 0, 0, 4]]
// console.log(coinCollect(matrix))

// // Solution with Map()
const coinCollectWithMap = (matrix) => {
  let columns = matrix[0] ? matrix[0].length : -1; // 4
  let rows = matrix.length; // 2
  let memo = new Map();

  let help = (i, j) => {
    let key = i + "," + j;
    // '0-0'
    // '1-0'
    if (memo.has(key)) {
      console.log(i, j, memo.get(key));
      return memo.get(key);
    }
    // '0-0' not in memo
    // '1-0' not in memo
    if (i === rows - 1 && j === columns - 1) return matrix[i][j];
    // if you're at the end, return number of coins at the end
    if (i >= rows || j >= columns) return 0;
    // out of bounds return 0
    memo.set(key, matrix[i][j] + Math.max(help(i + 1, j), help(i, j + 1)));
    // set '0-0' to ==> 0 + max( matrix[1][0], matrix[0][1] )
    // set '1-0' t0 ==> 2 + max( matrix[2][0], matrix[1][1] )

    // console.log(memo);
    return memo.get(key);
  };
  return help(0, 0);
};
let coins = [
  [1, 3, 1, 1], // 0 + max(2, 3)
  [2, 0, 0, 4],
]; // (1, 0) =>

// console.log(coinCollectWithMap(coins));

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
  [7, 8, 9],
];

const rotator = (grid) => {
  var newLength = grid[0].length;
  // console.log('OG new length: ', newLength);
  var rotated = [];

  // iterate over rows
  for (let i = 0; i < grid.length; i++) {
    newLength -= 1;
    var row = [];
    for (let j = 0; j < grid[i].length; j++) {
      // console.log('new length: ', newLength);
      row.push(grid[j][newLength]);
      // console.log(`(${i}, ${j}) => (${j}, ${newLength})`);
    }
    rotated.push(row);
  }

  return rotated;
};

let rotated = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];

// if (JSON.stringify(rotated) === JSON.stringify(rotator(matrix))) {
//   console.log('You got it, dude!')
// } else {
//   'watafak!';
// }
// rotator(matrix);

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

// for function solve(s1, s2) {
//   if (s2.includes(s1)) return true;
//   if (s1.length === 1) return false;
//   if (s1.length === s2.length && s1 !== s2) return false;
//   // save the last location of all the letters
//   for (var i = 0; i < s1.length - 1; i++) {
//     let currentLetter = s1[i]; // a, a
//     let nextLetter = s1[i + 1]; // a, a

//     if (s2.includes(currentLetter)) { // true
//       lastLocation =
//           var index = s2.indexOf(currentLetter, i); // index = 1
//     } else {
//       return false;
//     }

//     if (s2.indexOf(s1[i + 1], index + 1) > index) {

//       if (s1[i + 2]) {
//         continue; //
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
//   }
// }

// const solve = (s1, s2) => {
//   for (let i = 0; i < s1.length; i++) {
//     if (s2.includes(s1[i])) {
//       s2 = s2.slice(s2.indexOf(s1[i]) + 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
const solve = (s1, s2) => {
  // check if the leter
  let helper = (str1, str2) => {
    if (str2.includes(str1[0])) {
      str1 = str1.slice(1);
      str2 = str2.slice(s2.indexOf(str1[0]) + 1);
      helper(str1, str2);
    } else {
      return false;
    }
  };
  helper(s1, s2);

  return true;
};

// class Solution {
//     solve(s1, s2) {
//         var answer = true;
//         for (let i = 0; i < s1.length; i++) {
//             s2.includes(s1[i]) ? s2 = s2.slice(s2.indexOf(s1[i]) + 1) : answer = false
//         }
//         return answer;
//     }
// }

// PROBLEM 9
// Two Number Sum
// test
// var array = [3, 5, -4, 8, 11, 1, -1, 6];
// var target = 10;

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  // put a pointer at the beginning and one at the end
  var leftPointer = 0;
  var rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let sum = array[leftPointer] + array[rightPointer];

    if (sum === targetSum) {
      // console.log([array[leftPointer], array[rightIdx]]);
      return [array[leftPointer], array[rightPointer]];
    } else if (sum > targetSum) {
      // console.log('more');
      rightPointer -= 1;
    } else {
      // console.log('less');
      leftPointer += 1;
    }
  }
}

// Why does this not work?
// function twoNumberSum(array, targetSum) {
// 	// with pointers

// 	// sort the array in ASCENDING order
// 	array.sort((a,b) => a - b);
// 	// put a pointer at the beginning and one at the end
// 	var leftPointer = 0;
// 	var rightPointer = array.length - 1;

// 	const help = (leftIdx, rightIdx) => {
// 		let sum = array[leftIdx] + array[rightIdx];

// 		if (sum === targetSum) {

// 			return [array[leftIdx], array[rightIdx]];

// 		} else if (sum > targetSum) {

// 			rightIdx -= 1;
// 			help(leftIdx, rightIdx);

// 		} else {

// 			leftIdx += 1;
// 			help(leftIdx, rightIdx);

// 		}
// 	}
// 	help(leftPointer, rightPointer);

// }

// THree number sum
function threeNumberSum(array, targetSum) {
  // input is an arrya of distinct integers and an integer
  // output is a 2-d array of all the triplets (sorted) that add up to targetSum
  // edge cases - no triplet sum adds up to targetSum
  // constraints - everything sorted

  // sort the array in ASCENDING order
  array.sort((a, b) => a - b);
  // initialize result array var
  let triplets = [];

  // iterate
  for (var i = 0; i < array.length - 2; i++) {
    // save current number
    var firstNum = array[i];
    // iterate starting one index higher than first number
    for (var j = i + 1; j < array.length - 1; j++) {
      // save current number
      var secondNum = array[j];
      // iterate starting one index higher than second number
      for (var k = j + 1; k < array.length; k++) {
        // if the sum of the three adds up to targetSum
        var thirdNum = array[k];
        // put in an array and push to result array
        if (firstNum + secondNum + thirdNum === targetSum) {
          triplets.push([firstNum, secondNum, thirdNum]);
        }
      }
    }
  }

  // return result array
  return triplets;
}

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// var groceries = [
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ];
// var groceries = [1, 2, 3, 4]
// groceries.forEach(function(products){
//   console.log(products)
// })

// const singles = groceries.filter(amount => amount.quantity < 2)

// console.log(singles);

// function getTotalPrice(groceries) {
// // input is an array of objects
// // output is the total price of all the objects, a number

// // create a total variable
// var totalPrice = 0;
// // iterate over array
// for (var i = 0; i < groceries.length; i++) {
//   // create a product variable
//   var currentProduct = groceries[i];
//   // create a product total var
//   var productTotal = currentProduct.price * currentProduct.quantity;
//   // add price to total
//   totalPrice += productTotal;
// // close iteration
// }
// return totalPrice;
// return total
// }

// // assertFunction

// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('Passed!');
//   } else {
//     console.log('Failed! [' + testName + ']')
//   }
// }

// // testFunctions

// var consoleOutput = getTotalPrice(groceries);
// // console.log(consoleOutput)
// var desiredOutput = 10.40;
// assertEqual(consoleOutput, desiredOutput, 'should match total price for groceries'

// can you slice a number

// var num = 2434335;
// console.log('num:', num.slice(1))

// convert to string
// return splice from

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// A is the array with the peoples names
// B is the array with the numbers
// P is a string of length M representing a partial phone #

// S - string representing a phone #
// N - number of characters in S
// spaces and dashes in S can be ignored

// Reformat S such that digits are grouped in 3's
// separated by dashes (last block or 2 can have length 2)

// e.g.
// let S = "00-44  48 555 8361"
// => S = "004-448-555-583-61"

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // remove space from the input string
//     let temp = S.split(" ").join("");
//     // console.log('temp:', temp);

//     // remove - from the input string
//     temp = temp.split("-").join("");
//     // console.log('temp2:', temp);

//     // calculate string length
//     let N = temp.length;
//     let result = [];
//     let cnt = 0;
//     // set up reformat mode(Mode 0: ***-***, Mode 1: **-**, Mode 2: ***-**)
//     switch(N%3)
//     {
//         case 0:
//             for(let i=0;i<N;i++)
//             {
//                 result.push(temp[i]);
//                 // push dash after every 3 number (except final number)
//                 if(cnt%3==2 && i<N-1)
//                     result.push("-")
//                 cnt++;
//             }
//         break;
//         case 1:
//             for(let i=0;i<N-4;i++)
//             {
//                 result.push(temp[i]);
//                 // push dash after every 3 number
//                 if(cnt%3==2)
//                     result.push("-")
//                 cnt++;
//             }
//             // final tag number
//             result.push(temp[N-4],temp[N-3],"-",temp[N-2], temp[N-1]);

//         break;
//         case 2:
//             for(let i=0;i<N-2;i++)
//             {
//                 result.push(temp[i]);
//                 // push dash after every 3 number
//                 if(cnt%3==2)
//                     result.push("-")
//                 cnt++;
//             }
//             // final tag number
//             result.push(temp[N-2],temp[N-1]);
//         break;
//     }
//     // console.log('result:', result);
//     return(result.join(""));
// }

// var S = "00-44  48 555 8361"
// console.log(S.split(" ").join(""))
// solution(S);

// let Y = 2014;
// let A = "April";
// let B = "May";
// let W = "Wednesday";

const answer = (Y, A, B, W) => {
  // given the first day of the year, can extrapolate the first day of the month
  // determine if it's a leap year
  // output - integer of the number of weeks
  // write your code in JavaScript (Node.js 8.9.4)
  let days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  let n_month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let l_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (Y % 4 == 0)
    // if leap year, change 28 => 29
    l_month[1]++;

  let calc = 0;

  // iterate from 0 - 2
  for (let i = 0; i < n_month.indexOf(A); i++) {
    // calc = number of days up to April
    calc += l_month[i];
  }
  console.log("days: ", calc);

  // consider Jan 1st day, calculate day of starting month
  // 1 ?WHy is wednesday 2, not 3? One day hasn't elapsed until Tuesday
  // if the first is Monday, then you add 0 days... Wednesday you add 2 days
  // if it's been 6 days, then it's Sunday, 7 is Monday again
  calc = (calc + days[W]) % 7;
  console.log("new days: ", calc); // 1, Tuesday

  // find the 1st Monday for flight
  // ?Why does this work? Add 1 because days start with 1
  let f_m = 7 - calc + 1;

  calc = 0;
  // iterate from 0 - 4
  for (let i = 0; i < n_month.indexOf(B) + 1; i++) {
    // calculate the number of days up to May
    calc += l_month[i];
  }

  // consider Jan 1th day, calculate day of starting month
  calc = ((calc + days[W]) % 7) - 1; // ?WHY is it -1?
  console.log("calc again: ", calc);

  // find the last Sunday for flight
  //        #days[4] - calc+1
  let l_s = l_month[n_month.indexOf(B)] - (calc + 1);

  let sum = 0;
  for (let i = n_month.indexOf(A); i < n_month.indexOf(B) + 1; i++) {
    sum += l_month[i];
  }

  sum = sum - (f_m - 1) - (l_month[n_month.indexOf(B)] - l_s);
  return sum / 7;
};

// answer(Y, A, B, W);
// // It's been 5 days since wednesday (2) => Monday (0)
// console.log((5+2)%7)

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function pathfinder(N, A, B) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let path = [];

//     for(let i=0;i<A.length;i++) {
//         let temp = "";
//         // log all the paths, smallest number first
//         if (A[i]>B[i]) {
//           temp = temp + B[i] + "-" + A[i];
//         } else {
//           temp = temp + A[i] + "-" + B[i];
//         }

//         path.push(temp);
//         console.log('path: ', path);
//      }

//     // iterate from 1 to 3
//     for (let i=1;i<N;i++) {
//         let temp = "";
//         temp = i + "-" + (i+1);
//         console.log('temp: ', temp);
//         if(path.indexOf(temp)<0)
//             return false;
//     }

//     return true;
// }

// let N = 4;
// let A = [1, 2, 1, 3];
// let B = [2, 4, 3, 4];

// let N = 4;
// let A = [1, 2, 4, 4, 3];
// let B = [2, 3, 1, 3, 1];
// pathfinder(N, A, B);

// /////////////////////////////////////////////////////////////////////////////
function solution(A, B, P) {
  let list = [];

  for (let i = 0; i < B.length; i++) {
    if (B[i].indexOf(P) > -1) {
      let contact = {
        name: A[i],
        number: B[i],
      };

      list.push(contact);
    }
  }

  if (!list.length) return "NO CONTACT";

  list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  return list[0].name;
}

// let A = ["pim", "pom", "apas"];
// let B = ["999999999", "777888999", "099994444"];
// let P = "9999";
// solution(A, B, P);
////////////////////////////////////////////////////////////////////////////////////

// string reformat

// e.g.
// let S = "00-44 48 5555 8361"
// ==> "004-448-555-583-61"

// N is an integer b/w 2-100
// S contains only digits (at least 2)

function formatter(S) {
  // remove all spaces
  S = S.split(" ").join("");
  // remove all "-"
  S = S.split("-").join("");

  console.log(S.length);
  let newS = [];
  let count = 0;

  switch (S.length % 3) {
    case 0:
      console.log("0");
      for (let i = 0; i < S.length; i++) {
        count++;
        newS.push(S[i]);
        if (count === 3 && i < S.length - 1) {
          newS.push("-");
          count = 0;
        }
      }
      break;

    case 1:
      console.log("1");
      for (let i = 0; i < S.length - 4; i++) {
        count++;
        newS.push(S[i]);
        if (count === 3) {
          newS.push("-");
          count = 0;
        }
      }
      newS.push(
        S[S.length - 4],
        S[S.length - 3],
        "-",
        S[S.length - 2],
        S[S.length - 1]
      );
      break;

    // 2 : last set is 2
    case 2:
      console.log("2");
      // iterate over S from 0 to length - 3
      for (let i = 0; i < S.length - 2; i++) {
        count++;
        newS.push(S[i]);
        if (count === 3) {
          newS.push("-");
          count = 0;
        }
      }

      // add the last 2 formatted
      newS.push(S[S.length - 2], S[S.length - 1]);
      break;

    default:
      console.log("Somn went wrong");
  }

  console.log(newS);
  // return new S
  return newS.join("");
}

// let S = "00-44 48 5555 8361"
// formatter(S);
////////////////////////////////////////////////////////////////////////////////

// let Y = 2014; // Year of the vacation
// let A = "April"; // firts Month of vacation
// let B = "May"; // last Month of vacation
// let W = "Wednesday"; // day of Jan 1st

// input is : ^
// OUTPUT is an INTEGER representing the number of weeks available for vacay

function vacation(Y, A, B, W) {
  // initialize an object with the months and the number of days
  let months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  let days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  };

  // let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Find the first monday when Jon can fly out
  // find the day of the first of this month
  // find if leap year
  // if year is divisible by 4, feb has 29 days
  if (Y % 4 === 0) {
    months.February = 29;
  }
  // find the number of days from Jan 1 to Apr 1
  // for in loop up to April
  let daysToA = 0;
  for (const month in months) {
    if (month === A) {
      break;
    } else {
      daysToA += months[month];
    }
  }

  let totalDays = daysToA + days[W];
  let dayValue = totalDays % 7;
  console.log(totalDays % 7);
  let dayOfTheWeek = Object.keys(days).find((key) => days[key] === dayValue);
  // console.log(dayOfTheWeek);
  // Tuesday April 1st
  // Determine what day of the week is Apr 1
  // Determine the first day he can fly out
  // how to determine the difference between the day and MONDAY
  let daysToSubtract = 6 - dayValue;
  // console.log(daysToSubtract);
  let daysToVacation = totalDays + daysToSubtract;
  console.log("days to vacation: ", daysToVacation);

  // Find the last Sunday Jon can fly back
  let daysToB = 0;
  for (const month in months) {
    daysToB += months[month];
    if (month === B) {
      break;
    }
  }
  // find the number of days to end of month
  console.log("days to B: ", daysToB);
  // determine which day of the week it is
  let lastDayOfBValue = daysToB % 7;
  console.log("lastDayOfBValue: ", lastDayOfBValue);
  let lastDayOfVacay = daysToB - lastDayOfBValue;
  console.log("lastDay of vacay: ", lastDayOfVacay);
  // console.log('last day of B: ', lastDayOfB);
  // find the first sunday before it

  // divide the number of days by 7 and return
  let totalDaysOfVacay = lastDayOfVacay - daysToVacation;
  console.log("total days of vacay: ", totalDaysOfVacay);
  // find the number of days between the sunday he flies back and the monday he flies out
  // divide by 7
  let totalWeeks = totalDaysOfVacay / 7;

  return Math.floor(totalWeeks);
}

// let Y = 2014; // Year of the vacation
// let A = "April"; // firts Month of vacation
// let B = "May"; // last Month of vacation
// let W = "Wednesday"; // day of Jan 1st

// vacation(2014, A, B, W)
// 2012/4

////////////////////////////////////////////////////////////////////////////////////

// Graph consisting of:
// N vertices (1 through N)
// M edges
// described by two arrays (A, B) both length M
// (A[K], B[K]) describes edge b/w vertex A[K] and B[K]
// K from 0 through M-1

// Determine if there's a direct path from vertex 1 to vertex N
// going through all the vertices, one by one, in increasing order

function path(N, A, B) {
  let myMap = new Map([A, B]);
  console.log("my map: ", myMap);

  console.log(myMap.keys());
  let connections = [];
  let M = A.length;

  for (let i = 0; i < M; i++) {
    let pair = A[i] + "-" + B[i];
    connections.push(pair);
  }

  // console.log(connections.includes('1-5'));
  // make a list of all the vertices connecting one by one in ascending order
  // iterate through list from 1 to N-1, inclusive
  for (let j = 1; j < N; j++) {
    console.log(j);
    // make the pair with a dash as a string
    if (
      connections.includes(j + "-" + (j + 1)) ||
      connections.includes(j + 1 + "-" + j)
    ) {
      console.log("in continue: ");
      continue;
    } else {
      console.log("in false");
      return false;
    }
  }

  return true;
}

// let A = [1, 2, 4, 4, 3];
// let B = [2, 3, 1, 1, 1];
// let N = 4;
// path(N,A,B);

function solution(A, D) {
  let sum = 0;

  for (let i = 1; i <= 12; i++) {
    let card_payment = 0;
    let card_transaction = 0;

    for (let j = 1; j < A.length - 1; j++) {
      // console.log(D[i].split("-"));
      let month = parseInt(D[i].split("-")[1]); // month without 0's eg 04->4
      // console.log("month: ", month);
      if (month == i) {
        sum += A[j];
        if (A[j] < 0) {
          card_payment++;
          card_transaction += A[j];
        }
      }
    }
  }

  if (card < 3 || card > -100) {
    sum -= 5;
  }
  return sum;
}

// let A = [1, -1, 0, -105, 1];
// let D = ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"];
// solution(A, D);

// let sentence = S.replace(/\./gi, "**").replace(/\!/gi, "**").replace(/\?/g, "**");

// function photos(S){

//   let arr = S.split("\n");
//   let length = arr.length;
//   let ext_arr = [];
//   let city_arr = [];
//   let time_arr = [];

//   for (let i = 0; i < length; i++) {
//     let temp = arr[i].split(",");
//     let t_ext = temp[0].split(".")[1];

//     ext_arr.push(t_ext);
//     city_arr.push(temp[1]);
//     time_arr.push(new Date(temp[2]).getTime());// conv str to timestamp
//   }

//   let n_arr = [];

//   for (let i =0; i<length;i++) {
//     let rank = 1;
//     let city_cnt = 0;

//     for (let j = 0; j < length; j++) {

//       // if same city
//       if (city_arr[i] == city_arr[j]) {
//         city_cnt++;
//         // compare timestamp
//         if(time_arr[i] >time_arr[j]) {
//           rank++;
//         }
//       }

//     }

//     let prefix = new Array(city_cnt.toString().length - rank.toString().length).join("0"); // prefix 0
//     n_arr.push(city_arr[i]+prefix+rank+"."+ext_arr[i]);

//   }
//   return (n_arr.join("\n"));
// }

// // let S = "photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\n myFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBoB.jpg, London, 2015-08-05 00:02:03\nnotredam.png, Paris, 2015-09-01 12:00:01\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11";

// // solution(S);

// function solution(S)
// {
//     let string = "";
//     let arr = S.split("\n");
//     // console.log('arr: ', arr);
//     let len = arr.length;
//     let city_arr = [];
//     let extension_arr = [];
//     let time_arr = [];

//     // make an array for the cities, extensions, timestamps

//     for(let i=0;i<len;i++)
//     {
//         let buff = arr[i].split(","); // split each photo at the comma, 3 element arra
//         // [format, city, date-time]

//         extension_arr.push(buff[0].split(".")[1]); // get the extension ["photo:", "jpg"]

//         city_arr.push(buff[1]);

//         time_arr.push(new Date(buff[2]).getTime());

//         // console.log(buff[2], new Date(buff[2]), new Date(buff[2]).getTime() );
//     }
//     // console.log("city arr: ", city_arr);
//     // console.log("ext arr: ", extension_arr);

//     let name_arr = [];

//     // iterate from 0 to number of photos -1
//     for(let i=0;i<len;i++)
//     {
//         let cnt = 0;
//         let rank = 1;

//         // iterate from 0 to number of photos  -1
//         for(let j=0;j<len;j++)
//         {
//             // increment count for every city that matches
//             if(city_arr[j] == city_arr[i])
//             {
//                 // increment count
//                 cnt++;
//                 // increment rank for every time current is > comparison
//                 if(time_arr[i]>time_arr[j])
//                 {
//                   // increment rank
//                   rank++;
//                 }
//             }
//         }
//         console.log('cnt: ', cnt);
//         console.log('rank: ', rank);
//         let prefix = new Array(cnt.toString().length - rank.toString().length+1).join("0");
//         console.log(new Array(cnt.toString().length - rank.toString().length+1));
//         console.log('prefix: ',prefix);

//         name_arr.push(city_arr[i]+prefix+rank+"."+extension_arr[i]);
//         break;
//     }
//     // console.log(name_arr.join("\n"));
// }

// // solution("photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\n myFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBoB.jpg, London, 2015-08-05 00:02:03\nnotredam.png, Paris, 2015-09-01 12:00:01\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11");

// // let arr = new Array(4);
// // console.log('arr: ', arr);
// // console.log(arr.join("0"));

//  Determine whether two numbers have same frequency of digits
function sameFrequency(num1, num2) {
  let map1 = new Map();
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  for (let num of num1Str) {
    map1.get(num) ? map1.set(num, map1.get(num) + 1) : map1.set(num, 1);
  }

  for (let num of num2Str) {
    if (map1.get(num)) {
      map1.set(num, map1.get(num) - 1);
    } else {
      return false;
    }
  }

  return true;
}

// sameFrequency(1882, 2811);

// Determine whether a variable number of inputs contain duplicates
function areThereDuplicates() {
  let mySet = new Set(arguments);
  console.log(mySet.size);
  return mySet.size !== arguments.length;

  // can use frequency counter
  // but will use multiple pointers
  // what if I have obj's as inputs, or arr's?

  // let args = [...arguments];
  // args.sort(function (a, b) {return a > b});
  // console.log(args);

  // let i = 0;

  // for (let j = 1; j < args.length; j++) {
  //   if (args[j] === args[i]) {
  //     return true;
  //   } else {
  //     i++;
  //   }
  // }

  // return false;
}

// areThereDuplicates(3, 2, 1, 4);
// areThereDuplicates(10, 2, 1);
// areThereDuplicates('a', 'b', 'c', 'c', 'b');

// Determine if there is a pair that adds up to target average
function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = arr[left] + arr[right] / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

function isSubsequence(str1, str2) {
  if (!"") console.log("empty string = false");

  if (!str1 || str1.length > str2.length) return false;

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      if (i === str1.length) {
        return true;
      }
    }
  }

  return false;
}

isSubsequence("abc", "abracadabra");

function maxSubArraySum(arr, num) {
  // input - array (of numbers) and an integer
  // output - integer (greatest sum of length num)
  // edge - num > arr.length
  //        num < 1
  //        arr.length < 1 (0)
  //        => return null if answer does not exist
  // constraints - subarray MUST consist of consecutive numbers in arr
  // HL - Sliding window of length num. O(n) time/O(1) space

  if (num > arr.length) return null;
  if (!num) return null;
  if (!arr.length) return null;

  // initialize a maxSum to store the initial sum
  let maxSum = 0;

  // iterate from 0 to num
  for (let x of arr.slice(0, num)) {
    maxSum += x;
  }

  // initialize a tempSum = to maxSum
  let tempSum = maxSum;

  // iterate from 0 to (length - num)
  for (let i = 0; i < arr.length - num; i++) {
    // subtract the current number in the iteration from tempSum
    tempSum -= arr[i];
    // add number at current idx + num to tempSum
    tempSum += arr[i + num];
    console.log(tempSum);
    // compare to max and temp sums
    // if temp > max
    if (tempSum > maxSum) {
      // reassign max to temp
      maxSum = tempSum;
    }
  }

  // return maxSum
  return maxSum;
}

maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39

function minSubArrayLen(arr, num) {
  // n = length of min array
  // let n = minSubArr.length;
  let sum = 0;
  let end = 0;

  for (let x of arr) {
    sum += x;
    // minSubArr.push(x);
    end++;
    if (sum >= num) break;
  }
  // if all added together don't meet the criteria, return 0
  // if (minSubArr.length === arr.length) return 0;
  console.log("original sum:", sum);

  // initiate temp sum = to sum or reuse sum?
  let start = 0;
  let minLen = end - start;

  // iterate up to arr len
  for (let i = 0; i < arr.length; i++) {
    if (sum >= num && start < arr.length) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    } else if (sum < num && end < arr.length && start < arr.length) {
      sum += arr[end];
      end++;
    }
  }

  // Will the loop see the new reassigned n?
  // return the length of min array
  console.log("minLen:", minLen);
  // return minLen;
}
// WORKING SOLUTION // min number of elements that add up to the sum
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
// minSubArrayLen([2,3,1,2,4,3], 7) // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3

// returns the amount of times the shortstring is in the longstring
let naiveStringSearch = (longString, shortString) => {
  let result = 0;
  let lettersMatching = 0;
  let k = 0;

  while (k < longString.length) {
    if (longString[k] === shortString[0]) {
      lettersMatching = 1;
      for (let i = 1; i < shortString.length; i++) {
        if (longString[k + i] === shortString[i]) lettersMatching++;
        else break;
      }

      if (lettersMatching === shortString.length) {
        result++;
        lettersMatching = 0;
        k = k + shortString.length - 1;
      }
    }

    k++;
  }

  return result;
};

console.log(
  "naive:",
  naiveStringSearch("hellotobias im , yes, yes yetobias tobias ", "tobias")
);

// factorial
// non-recursive
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }

//   return total;
// }

// recursive
// let factorial = (num) => (num === 1 ? 1 : num * factorial(num - 1));
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log("factorial: ", factorial(1));

// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.
// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
// Return the number of islands in grid2 that are considered sub-islands.

var countSubIslands = function (grid1, grid2) {
  // how to avoid repeats
  // initialize an island structure (decide on what structure works best)
  // [0,0] = [0,1], [0,2], [1,2], [1,3], [1,4]
  // [0,1] =
  let rows = grid1.length;
  let columns = grid1[0].length;
  let islands = new Map();
  let visited = Array.from({ length: rows }, () => Array(columns).fill(0));

  // let connections = []
  let checkAdj = (origArr, conn) => {
    // console.log('origArr:', origArr)
    // console.log('conn:', conn)
    let i = conn[0];
    // console.log('i', i)
    let j = conn[1];
    // console.log('j', j)

    // check left
    if (j - 1 >= 0) {
      if (grid2[i][j - 1] === 1 && visited[i][j - 1] === 0) {
        // and not visited
        // console.log('in if 1')
        let connections = islands.get(origArr);
        // connections.push([i, (j - 1)])
        //  console.log("connections 1:", connections)
        islands.set(origArr, connections);
        let currArr = [i, j - 1];
        visited[i][j - 1] = 1;
        checkAdj(origArr, [i, j - 1]);
      }
    }

    // check right
    // console.log(grid2[i][(j + 1)])
    if (j + 1 < grid2[0].length) {
      if (grid2[i][j + 1] === 1 && visited[i][j + 1] === 0) {
        // console.log('in if 2')
        let connections = islands.get(origArr);
        connections.push([i, j + 1]);
        // console.log("connnections:", connections)
        islands.set(origArr, connections);
        visited[i][j + 1] = 1;
        checkAdj(origArr, [i, j + 1]);
      }
    }

    // check up
    if (i - 1 >= 0) {
      if (grid2[i - 1][j] === 1 && visited[i - 1][j] === 0) {
        // console.log('in if 3')
        let connections = islands.get(origArr);
        connections.push([i - 1, j]);
        // console.log("connnections:", connections)
        islands.set(origArr, connections);
        visited[i - 1][j] = 1;
        checkAdj(origArr, [i - 1, j]);
      }
    }

    // check down
    if (i + 1 < grid2.length) {
      if (grid2[i + 1][j] === 1 && visited[i + 1][j] === 0) {
        // console.log('in if 4')
        let connections = islands.get(origArr);
        connections.push([i + 1, j]);
        // console.log("connnections:", connections)
        islands.set(origArr, connections);
        visited[i + 1][j] = 1;
        checkAdj(origArr, [i + 1, j]);
      }
    }

    // console.log("visited:", visited)
  };

  // iterate over grid 2 to find islands
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      if (grid2[i][j] && visited[i][j] === 0) {
        // if it's a 1, add to map and check the adjacent
        let key = [i, j];
        islands.set(key, []);
        // console.log(visited)
        visited[i][j] = 1;
        // console.log(visited)
        // console.log('islands', islands)
        checkAdj(key, [i, j]);
        // console.log('islands', islands)
      }
      // break;
    }
    // break;
  }
  console.log(visited);
  console.log(islands);
};

// You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

var largestLocal = function (grid) {
  const matrix = [];
  let arr = [];

  let checker = (m, n) => {
    let max = 0;

    for (i = m - 1; i <= m + 1; i++) {
      for (j = n - 1; j <= n + 1; j++) {
        if (grid[i][j] > max) {
          max = grid[i][j];
        }
      }
    }

    arr.push(max);
  };

  for (let i = 1; i <= grid.length - 2; i++) {
    for (let j = 1; j <= grid.length - 2; j++) {
      checker(i, j);
    }
  }

  for (let i = 0; i < arr.length; i += grid.length - 2) {
    matrix.push(arr.slice(i, i + grid.length - 2));
  }

  return matrix;
};

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var reverse = function(x) {
  let stringX = x.toString()
  if (stringX.length === 1) return x;

  let reverseString = (str) => {
      return str.split("").reverse().join("");
  }

  if (x < 1) {
      if (stringX.length === 2) {
       return x;   
      } else {
          let output = "-";
          stringX = stringX.slice(1);
          let reversed = reverseString(stringX);
          output += reversed;
          let numOutput = Number(output);
          if (numOutput < -(2**31) || numOutput > (2**31)-1) return 0;
          return numOutput;
      };
  }

  let output = Number(reverseString(stringX));
  if ( output < -(2**31) || output > (2**31)-1) return 0;
  return output;
};