// console.log("Hello Ravi!");

let arr = [11, 2, 3, 4, 5, 6, 77];

// input = array of numbers
// output = string ("Boom!") if the digit 7 appears, "there is no 7 in the array" otherwise

// OPTION 1
// .contains() ?

// OPTION 2
// create a function that takes an array as an argument
// iterate over the array
// if current number is 7
// return "Boom!"
// if iteration ends (no 7 was found)
// return "there is no 7 in the array"

let sevenFinder = (list) => {
  let help = (subList) => {
    for (const num of subList) {
      console.log("num in subList = ", typeof Number(num));
      if (Number(num) === 7) console.log("Boom!");
    }
  };

  for (const num of list) {
    console.log(Number(num));
    if (Number(num) === 7) return "Boom!";
    let numArray = num.toString().split("");
    if (numArray.length > 1) {
      console.log("numArray = ", numArray);
      help(numArray);
    }
  }

  return "there is no 7 in the array";
};

console.log(sevenFinder(arr));
