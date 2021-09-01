function bubbleSort(arr, n = 1) {
  // input is an array
  // output is sorted input array
  // edge - arr is empty
  //
  // constraints - do not use any native methods

  // HI LEVEL
  // iterate over array
  // how to restart the iteration every time? recursion?
  // swap values if needed
  // evey iteration should end 1 element sooner
  // iterate until there are no changes, so keep a tracker
  // return the input array
  let swapOcurred = false;

  for (let i = 0; i < arr.length - n; i++) {
    console.log(n)
    if (arr[i+1] < arr[i]) {
      swapOcurred = true;
      [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
    }
  }
  console.log(arr);
  if (swapOcurred) bubbleSort(arr, n+=1);

  return arr
  // console.log(arr);
}

// bubbleSort([4,5,3,6,1,7,3,1,5,3]);



