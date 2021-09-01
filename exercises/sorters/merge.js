
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

merger([1,3,4,5,6], [1,3,3,5,7]);