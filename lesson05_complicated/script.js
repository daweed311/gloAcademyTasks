const arr = [1001, 2002, 2222, 2004, 3210, 40041, 444444];
const max = 100;

const twoOrFour = function (arrOfNums) {
  for (let key of arrOfNums) {
    if (key.toString()[0] == 2 || key.toString()[0] == 4) {
      console.log(key);
    }
  }
};

twoOrFour(arr);

const primeNum = function (limit) {
  itteration: for (let i = 2; i <= max; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue itteration;
    }

    console.log(`${i} -> Делители этого числа: 1 и ${i}`);
  }
};

primeNum(max);
