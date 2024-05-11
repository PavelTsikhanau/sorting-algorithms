const arr = [0, 9, 2, 5, 4, 0, 1, 7, 8];

function selectionSort(arr) {
  const sortedArray = [];

  while (arr.length > 0) {
    let minimum = Math.min(...arr);
    sortedArray.push(minimum);
    arr.splice(arr.indexOf(minimum), 1);
  }
  return sortedArray;
}

console.log(selection(arr));
