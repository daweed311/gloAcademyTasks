const arr = [1001, 2002, 2222, 2004, 3210, 40041, 444444];

const twoOrFour = function (arrOfNums) {
  for (let key of arrOfNums) {
    if (key.toString()[0] == 2 || key.toString()[0] == 4) {
      console.log(key);
    }
  }
};

twoOrFour(arr);
