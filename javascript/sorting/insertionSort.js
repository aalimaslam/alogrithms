// code for insertion Sorting.

function insertionSort(arr, n) {
  // loop for outer passes.
  for (let i = 0; i < n - 1; i++) {
    let elem = arr[i + 1];

    for (let j = i; j >= 0; j--) {
      if (arr[j] > elem) {
        arr[j + 1] = arr[j];
        arr[j] = elem;
      } else {
        break;
      }
    }
  }

  return arr;
}

let arr = [3, 5, 2, 6, 7];

console.log(insertionSort(arr, arr.length));
