// Более гибкое решение

let num = 266219;

let arrOfNum = num.toString().split("");

let pow = 1;
for (let i = 0; i < arrOfNum.length; i++) {
  pow *= +arrOfNum[i];
}
console.log(pow);

pow = pow ** 3;
console.log(pow.toString().split("").slice(0, 2).join(""));

// Решение подстать фиксированному num = 266219

// let num = 266219;

// let arrOfNum = num.toString().split("");

// console.log(arrOfNum);

// let result =
//   arrOfNum[0] *
//   arrOfNum[1] *
//   arrOfNum[2] *
//   arrOfNum[3] *
//   arrOfNum[4] *
//   arrOfNum[5];

// console.log(result);

// let finalResult = result ** 3;
// console.log(String(finalResult).slice(0, 2));
