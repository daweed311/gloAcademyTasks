const lang = prompt("Выберите язык", "ru/en").toLocaleLowerCase().trim();

// Через конструкцию if:

// if (lang == "ru") {
//   console.log(
//     "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье"
//   );
// } else if (lang == "en") {
//   console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
// } else {
//   alert("Выбирайте только между en и ru");
// }

// Через switch-case:

// switch (lang) {
//   case "ru":
//     console.log(
//       "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье"
//     );
//     break;
//   case "en":
//     console.log(
//       "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
//     );
//     break;
//   default:
//     alert("Выбирайте только между en и ru");
//     break;
// }

// Через многомерный массив без ифов и switch.

let arr = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Восресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

lang == "ru"
  ? console.log(arr[0].toString())
  : lang == "en"
  ? console.log(arr[1].toString())
  : console.log("Выбирайте только между en и ru");

// задача c namePerson

// const namePerson = prompt("Введите имя");

// namePerson == "Артем"
//   ? console.log("директор")
//   : namePerson == "Александр"
//   ? console.log("преподаватель")
//   : console.log("студент");
