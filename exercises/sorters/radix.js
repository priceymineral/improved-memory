// HELPERS
let getNum = (num, position) => {
  let numStr = num.toString()
  let idx = numStr.length - 1 - position;
  let digit = numStr[idx];

  if (digit === '-' || !digit) return 0;

  return Number(digit);
}