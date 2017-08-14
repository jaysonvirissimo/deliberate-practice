for (var row = 0; row < 8; row++) {
  var topRow = '# # # # ';
  var bottomRow = ' # # # #';
  if (row % 2 == 0) {
    console.log(topRow);
  } else {
    console.log(bottomRow);
  }
}
