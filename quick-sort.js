let arr = [1, 4, 3, 7, 0, 2, 6, 8, 9];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];

  let left = [];
  let right = [];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(pivot);
  console.log(left);
  console.log(right);
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));
