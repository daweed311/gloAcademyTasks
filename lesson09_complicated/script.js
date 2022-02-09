"use strict";

const timeTemplate = document.querySelector('.template');
const output = timeTemplate.querySelectorAll('p');
const currentDate = new Date();

const objDate = (date) => (
  {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    dayWeek: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    second: date.getSeconds(),
  }
);

const firstFormat = function (actualDate) {
  let endHour, endMinute, endSecond;

  const ending = function (num, aEnding) {
    const lastNum = +(num + '').slice(-1);

    return aEnding[
      (lastNum === 1 && num !== 11) ? 0 :
        (lastNum > 1 && lastNum < 5 && ![12, 13, 14].includes(num)) ? 1 : 2
    ];
  };

  actualDate.dayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
    'Пятница', 'Суббота', 'Воскресенье'][(actualDate.dayWeek) ? actualDate.dayWeek - 1 : 6];
  actualDate.month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][actualDate.month];

  endHour = ending(actualDate.hours, ['', 'а', 'ов']);
  endMinute = ending(actualDate.minutes, ['а', 'ы', '']);
  endSecond = ending(actualDate.second, ['а', 'ы', '']);

  output[0].innerHTML = `Сегодня ${actualDate.dayWeek},</br>
    ${actualDate.day} ${actualDate.month} ${actualDate.year} года,</br>
    ${actualDate.hours} час${endHour} ${actualDate.minutes} минут${endMinute} ${actualDate.second} секунд${endSecond}`;
};

const secondFormat = (actualDate) => {
  const leadingZero = (num) => ('0' + num + ' ').slice(-3, -1);

  actualDate.month++;
  for (let key in actualDate) {
    if ('day,month,hours,minutes,second,'.includes(key + ',')) {
      actualDate[key] = leadingZero(actualDate[key]);
    }
  }

  output[1].innerHTML = `<b>${actualDate.day}.${actualDate.month}.${actualDate.year}` +
    ` - ${actualDate.hours}:${actualDate.minutes}:${actualDate.second}</b>`;
};

firstFormat(objDate(currentDate));
secondFormat(objDate(currentDate));

let idTimer = setInterval(() => {
  const currentDate = new Date();

  firstFormat(objDate(currentDate));
  secondFormat(objDate(currentDate));
}, 1000);