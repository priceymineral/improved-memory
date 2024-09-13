class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i);
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

  set(key, value) {
    // hash the key, ie figure out where to store it.
  }
}

// HASH FUNCTIONS

let total = 0;

total += "hello".charCodeAt(0);
total += "hello".charCodeAt(1);
total += "hello".charCodeAt(2);
total += "hello".charCodeAt(3);
total += "hello".charCodeAt(4);

console.log(`total: ${total}`);

// HASH Fn (only hashes strings, not constant time (linear depending on key length), could be a little random)
// let hash = (key, arrayLen) => {
//     let total = 0;
//     for (const char of key) {
//         console.log(char);
//         let value = char.charCodeAt(0);
//         total = (total + value) % arrayLen;
//     }
//     return total;
// };

let hash = (key, arrayLen) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % arrayLen;
};

// console.log(hash("orange", 11));
// console.log(hash("bleu", 11));
// console.log(hash("cyan", 11));
// console.log(hash("purple", 11));

// HASH Fn with a slight improvement. Prime number helps reduce collisions.

let improvedHash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key.charCodeAt(i);
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

console.log(improvedHash("orange", 11));
console.log(improvedHash("bleu", 11));
console.log(improvedHash("cyan", 11));
console.log(improvedHash("purple", 11));
