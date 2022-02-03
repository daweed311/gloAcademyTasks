"use strict";

const myFunc = function (arg) {
  let someString;
  if (typeof arg === "string") {
    const limitLength = 30;
    const str = arg.trim();
    if (str.length > limitLength) {
      someString = str.substr(0, limitLength) + "...";
    } else {
      someString = str;
    }
  }
  return someString;
};

console.log(myFunc("   bla bla bla bla  "));
console.log(
  myFunc(
    "   bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
  )
);
