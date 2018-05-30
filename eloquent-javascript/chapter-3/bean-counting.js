const countBs = function(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      count += 1;
    }
  }
  return count;
};

const countChar = function(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count += 1;
    }
  }
  return count;
};
