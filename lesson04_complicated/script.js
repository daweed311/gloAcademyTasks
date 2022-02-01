const myFunc = function (value) {
  if (typeof value !== "string") {
    console.log("Не строка");
  } else if (typeof value == "string") {
    value = value.trim();
  }
  if (value.length > 30) {
    value = value.substring(0, 30) + "...";
    console.log(value);
  }
};

myFunc("try me");
