//Вопросы по проекту
 const titleProject = prompt("Название проекта?");
 const screensValue = prompt("Какой тип экрана?");
 const responsive = confirm("Нужен ли респонсивный сайт?");
 const service1 = prompt("Какой сервис нужен?");
 const servicePrice1 = +prompt("Сколько это будет стоить?");
 const service2 = prompt("Какой еще сервис тебе нужен?");
 const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
 const screenPrice = 12400; // ("цена реализации одного экрана");
 const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Вычисляем процент отката и итоговую сумму
const contractorPercentage = 10;
const contractorCut = fullPrice * (contractorPercentage / 100);
const servicePercentPrice = Math.round(fullPrice - contractorCut);

// Условия скидки
let message;
if (fullPrice > 50000) {
    message = "Сделаем скидку 10%";
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    message = "Сделаем скидку 5%";
} else if (fullPrice > 0 && fullPrice <= 20000) {
    message = "Скидка не предусмотрена";
} else if (fullPrice === 0) {
    message = "Цена равна нулю";
} else {
    message = "Что-то пошло не так";
}

 // Выводим в консоль
 console.log (titleProject);
 console.log (screensValue);
 console.log (responsive);
 console.log (service1);
 console.log (servicePrice1);
 console.log (service2);
 console.log (servicePrice2);
 console.log (fullPrice);
 console.log ("Итоговая сумма после учета процента отката:", servicePercentPrice);
 console.log(message);
 console.log (typeof screenPrice);

