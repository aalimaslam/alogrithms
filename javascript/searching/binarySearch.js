// Code for the binarySearch

function binarySearch(arr, key) {
  let lower = 0;
  let upper = arr.length - 1;
  let mid;

  while (lower <= upper) {
    mid = parseInt((lower + upper) / 2);
    if (arr[mid] == key) return mid;
    else {
      if (arr[mid] > key) {
        upper = mid - 1;
      } else {
        lower = mid + 1;
      }
    }
  }

  return -1;
}
