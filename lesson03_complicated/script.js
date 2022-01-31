const lang = prompt("Выберите язык", "ru/en").toLocaleLowerCase().trim();

const weekendDaysRu =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье";
const weekendDaysEn =
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
// Через конструкцию if:

// if (lang == "ru") {
//   console.log(weekendDaysRu);
// } else if (lang == "en") {
//   console.log(weekendDaysEn);
// } else {
//   alert("Выбирайте только между en и ru");
// }

// Через switch-case:

// switch (lang) {
//   case "ru":
//     console.log(weekendDaysRu);
//     break;
//   case "en":
//     console.log(weekendDaysEn);
//     break;
//   default:
//     alert("Выбирайте только между en и ru");
//     break;
// }

// Через многомерный массив без ифов и switch.

let arr = [[weekendDaysRu], [weekendDaysEn]];

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
