const max = 100;

const primeNum = function (limit) {
  itteration: for (let i = 2; i <= max; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue itteration;
    }

    console.log(`${i} -> Делители этого числа: 1 и ${i}`);
  }
};

primeNum(max);
