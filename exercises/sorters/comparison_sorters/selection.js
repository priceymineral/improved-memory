//O(n^2) time/O(1) space
function selectionSort(arr) {
  // input is an array of numbers
  // output is the input array sorted
  // edge - arr is empty
  //
  // constraints - do not use native sorting methods

  // High Level - find the smallest number in the array and swap with the beginning

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        idx = j;
      }
    }
    if (idx !== i) {
      // console.log('swap')
      // [arr[i], arr[idx]] = [arr[idx], arr[i]]; // newer way to swap
      var temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  return arr;
  // console.log('wtd', arr);
}

// selectionSort([4,5,3]);
// selectionSort([4,5,3,6,1,7,3,1,5,3]);