"use strict";

const myFunc = function (arg) {
  if (typeof arg === "string") {
    const limitLength = 30;
    const str = arg.trim();
    if (str.length > limitLength) {
      return str.substr(0, limitLength) + "...";
    } else {
      return str;
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
