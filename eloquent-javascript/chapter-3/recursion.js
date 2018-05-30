const isEven = function(number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  }

  return isEven(number - 2);
};
