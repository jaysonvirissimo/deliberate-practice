const topRank = '# # # # ';
const bottomRank = ' # # # #';

for (let rank = 0; rank < 8; rank++) {
  if (rank % 2 == 0) {
    console.log(topRank);
  } else {
    console.log(bottomRank);
  }
}
