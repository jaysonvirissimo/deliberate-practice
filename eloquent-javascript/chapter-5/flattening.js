function flatten(arrays) {
  return arrays.reduce((memo, element) => { return memo.concat(element) });
}
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays))
// → [1, 2, 3, 4, 5, 6]
