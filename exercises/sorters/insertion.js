function insertionSort(arr) {
  // input is an array of numbers
  // output is the input array sorted
  // edge - arr is empty
  //      -
  // constraints - do not use native sorting
  // high level - start at index 1 iterate
  //            - compare to previous numbers one by one until you find a larger
  //            - swap with number after larger

  // loop over array starting at 1, up to the end of the array
  for (let i = 1; i < arr.length; i++) {
    // loop over starting at outer index - 1, down to 0
    for (let j = i - 1; j >= 0; j--) {
      // if outer is < number at 0 index
      if (arr[i] <= arr[0]) {
        // console.log(arr[i] + ' <=', arr[0]);
        // unshift to the front of the array
        arr.unshift(arr[i]);
        // delete it from the original spot
        // console.log('arr before:', arr);
        arr.splice(i + 1, 1);
        // console.log('arr after:', arr);
        break;
      }

      // compare number at inner to number at outer loop index
      // if outer is >= than inner
      if (arr[i] >= arr[j]) {
        // console.log(arr[i] + ' >=', arr[j]);
        // insert outer after inner if i !== j+1
        if (j + 1 !== i) {
          // console.log('insert '+ arr[i] + ' at', j+1);
          arr.splice(j + 1, 0, arr[i]);
          // delete it from its og spot
          arr.splice(i + 1, 1);
        }
        // break
        break;
      }
    }
  }

  // return the array
  console.log(arr);
}

// just another way to do it...
function betterInsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }

  return arr;
}
// insertionSort([4,5,3]);
// insertionSort([4,5,3,6,1,7,3,1,5,3]);
// insertionSort([]);
