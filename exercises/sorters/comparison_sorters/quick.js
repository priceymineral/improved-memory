  // input - array (arr)
  // output - integer (final index of the pivot)
  // edge - arr is empty
  //      - arr is length 1
  // constraints -
  // high level - find the position of the first element in the array

  let pivot = (arr) => {

    // initiate a pivot variable, set it to the first element of arr
    let pivot = arr[0];
    // track the number of smaller values (new index of pivot at the end of the iteration)
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        index++;
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }

    [arr[0], arr[index]] = [arr[index], arr[0]];

    return index;
  }

  // pivot([545,749,451,45,650,234,46,21,134,323,11,104]);
  pivot([5,6,4,7,7,7,3]);
  // pivot([]);