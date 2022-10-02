// function for the bubble sort

function bubbleSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// testing the bubbleSort function
let arr = [5, 3, 6, 2, 1];

const res = bubbleSort(arr, arr.length);

console.log(res);
