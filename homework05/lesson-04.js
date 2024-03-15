// Вопросы по проекту
const titleProject = prompt("Название проекта?").trim();
const screensValue = prompt("Какой тип экрана?", "Шаблонные, с уникальным дизайном, с анимациями").trim();
const responsive = confirm("Нужен ли респонсивный сайт?");
const service1 = prompt("Какой сервис нужен?").trim();
const servicePrice1 = +prompt("Сколько это будет стоить?").trim();
const service2 = prompt("Какой еще сервис тебе нужен?").trim();
const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?").trim();
const screenPrice = 12400; // цена реализации одного экрана

// 1. Создаем функцию getAllServicePrices
const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();

// 2. Создаем функцию getFullPrice
function getFullPrice() {
    return allServicePrices + screenPrice;
}

const fullPrice = getFullPrice();

// 3. Создаем функцию getTitle
function getTitle() {
    // Первый символ в верхний регистр, остальные - в нижний
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

// 4. Создаем функцию getServicePercentPrices
function getServicePercentPrices() {
    const contractorPercentage = 10;
    const contractorCut = fullPrice * (contractorPercentage / 100);
    return Math.round(fullPrice - contractorCut);
}

// 5. Создаем функцию getRollbackMessage
function getRollbackMessage() {
    let message;
    if (fullPrice > 50000) {
        message = "Скидка клиенту: 10%";
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        message = "Скидка клиенту: 5%";
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        message = "Скидка клиенту не предусмотрена";
    } else {
        message = "Что-то пошло не так";
    }
    console.log(message);
}

// Получаем результаты всех операций
const editedTitle = getTitle();
const servicePercentPrice = getServicePercentPrices();

// Выводим результаты в консоль
console.log("Название проекта:", editedTitle);
console.log("Тип экрана:", screensValue);
console.log("Респонсивный сайт:", responsive);
console.log("Сервис 1:", service1);
console.log("Стоимость сервиса 1:", servicePrice1);
console.log("Сервис 2:", service2);
console.log("Стоимость сервиса 2:", servicePrice2);
console.log("Стоимость экрана:", screenPrice);
console.log("Стоимость всех дополнительных услуг:", allServicePrices);
console.log("Полная стоимость проекта:", fullPrice);
console.log("Итоговая стоимость для клиента:", servicePercentPrice);

// Выводим сообщение о скидке клиенту
getRollbackMessage();
