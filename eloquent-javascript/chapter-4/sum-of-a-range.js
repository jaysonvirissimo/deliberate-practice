function range(start, end, step = 1) {
  let array = [];

  for (let i = start; i <= end; i += step) {
    array.push(i);
  }

  return array;
}

function sum(array) {
  let current = 0;

  for (let i = 0; i < array.length; i++) {
    current += array[i];
  }

  return current;
}
