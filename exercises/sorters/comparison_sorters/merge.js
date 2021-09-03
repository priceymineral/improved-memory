// O(nlog(n)) time/O(n) space
// HELPER FUNCTION FOR MERGESORT
function merger(arr_i, arr_j) {
  // input is 2 sorted arrays
  // output is 1 sorted array consisting of the elements from the input arrays
  // edge - if either input array is empty, just return the nonempty arrat
  //      - if both are empty, return an empty array
  // constraints - don't use native methods
  // HL - compare item in each array, push the smallest
  // initialize a merged array
  let merged = [];
  // keep a tracker index for each array
  let i = 0;
  let j = 0;

  // iterate over both arrays, while both indexes are less than the length their respective arrays, ie, as long as they're BOTH less than the length of the array
  while (i < arr_i.length || j < arr_j.length) {
    // if one tracker reached the end and the other hasn't
    if (i > arr_i.length - 1) {
      // push the current item at the other array
      merged.push(arr_j[j]);
      // increment the tracker of this array
      j++;
      continue;
    }

    if (j > arr_j.length - 1) {
      // push the current item at the other array
      merged.push(arr_i[i]);
      // increment the tracker of this array
      i++;
      continue;
    }

    // else compare items from each array at current index
    // push the smallest
    // if they're equal
    if (arr_i[i] === arr_j[j]) {
      // push both items
      merged.push(arr_i[i]);
      merged.push(arr_j[j]);
      // increment the tracker at where the smallest item was
      i++;
      j++;
    } else if (arr_i[i] < arr_j[j]) {
      merged.push(arr_i[i]);
      i++;
    } else {
      merged.push(arr_j[j]);
      j++;
    }
  }

  // return merged array;
  // console.log(merged);
  return merged;

}


// implementation w/o divider helper function, only merger
let mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merger(left, right);
}

// mergeSort([545,749,451,45,650,234,46,21,134,323,11,104]);
// mergeSort([5,7,4,5,6]);
// mergeSort([]);

// // merger([1,3,4,5,6], [1,3,3,5,7]);
// let divider = (inputArray, outputArray) => {
//   if (inputArray.length === 1) {
//     outputArray.push(inputArray);
//     return;
//   }

//   let halfwayIdx = Math.floor(inputArray.length/2);
//   let firstHalf = inputArray.slice(0, halfwayIdx);
//   let secondHalf = inputArray.slice(halfwayIdx)

//   divider(firstHalf, outputArray);
//   divider(secondHalf, outputArray);

//   return outputArray;
// }

// let mergeSort = (array) => {
//   if (array.length <= 1) {
//     return array;
//   } else {
//     let divided = divider(array, []);
//     let merged = merger(divided[0], divided[1]) || arr[0];
//   }

//   for (let i = 2; i < divided.length; i++) {
//     merged = merger(merged, divided[i]);
//   }

//   return merged;
// }
