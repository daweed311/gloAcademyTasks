const lang = prompt("Выберите язык", "ru/en").toLocaleLowerCase().trim();

const weekDaysRu =
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье";
const weekDaysEn =
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
// Через конструкцию if:

// if (lang == "ru") {
//   console.log(weekDaysRu);
// } else if (lang == "en") {
//   console.log(weekDaysEn);
// } else {
//   alert("Выбирайте только между en и ru");
// }

// Через switch-case:

// switch (lang) {
//   case "ru":
//     console.log(weekDaysRu);
//     break;
//   case "en":
//     console.log(weekDaysEn);
//     break;
//   default:
//     alert("Выбирайте только между en и ru");
//     break;
// }

// Через многомерный массив без ифов и switch.

let arr = [[weekDaysRu], [weekDaysEn]];

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
