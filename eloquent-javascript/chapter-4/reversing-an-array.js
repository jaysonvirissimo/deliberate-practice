function reverseArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[array.length - 1 - i];
    newArray.push(element);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let x = array[i];
    let y = array[array.length - 1 - i];
    array[i] = y;
    array[array.length - 1 - i] = x;
  }

  return array;
}
