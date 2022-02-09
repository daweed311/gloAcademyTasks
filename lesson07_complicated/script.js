// Урок 7 Знакомимся с объектами и массивами, методы переборов и псевдомассивы
"use strict";

const week = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

let outputBody = "";

const currentDay = () => {
  let countDay = new Date().getDay();
  if (countDay) {
    return countDay - 1;
  } else {
    return 6;
  }
};

const daysOfTheWeek = function () {
  const body = document.querySelector("body");
  const current = currentDay();

  week.forEach((day, index) => {
    let outputText = day;

    if (index > 4) {
      outputText = "<i>" + outputText + "</i>";
    }
    if (index === current) {
      outputText = "<b>" + outputText + "</b>";
    }
    outputBody += outputText + "<br />";
  });
  body.innerHTML = outputBody;
};

daysOfTheWeek();
