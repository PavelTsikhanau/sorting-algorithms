const arr = [2, 9, 0, 5, 4, 1, 7, 8];

function selection(arr) {
  const sortedArray = [];

  for (let i = 0; i <= arr.length; i++) {
    sortedArray.push(Math.min(...arr));
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  }
  return sortedArray
}

console.log(selection(arr))
