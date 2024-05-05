const arr = [3,8,1,3,5,0,6];
const bubbling = (arr) => {
  let hasChanges = false;
  for (let i = 0; i < arr.length; i++) {
    const left = arr[i];
    const right = arr[i+1]
    if (left > right) {
      arr.splice(i, 2, right, left);
      if (!hasChanges) {
        hasChanges = true;
      }
    }
  };
  if (hasChanges) {
    return bubbling(arr);
  }
  return arr;

};

console.log(bubbling(arr));
