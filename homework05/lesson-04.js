// Функция проверки на число
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  // Валидация ввода стоимости услуг
  function getValidatedServicePrice(serviceName) {
    let price;
    do {
      price = prompt(`Сколько будет стоить ${serviceName}?`).trim();
      if (price === null) {
        // Пользователь отменил ввод
        console.error("Ввод был отменен.");
        return null;
      } else if (!isNumeric(price)) {
        console.warn ("Необходимо ввести числовое значение! Повторите ввод.");
      }
    } while (!isNumeric(price));
    
    return Number(price);
  }
  
  // Стартовый скрипт
  let titleProject = prompt("Название проекта?").trim();
  let screensValue = prompt("Какой тип экрана?", "Шаблонные, с уникальным дизайном, с анимациями").trim();
  let responsive = confirm("Нужен ли респонсивный сайт?");
  let service1 = prompt("Какой сервис нужен?").trim();
  let servicePrice1 = getValidatedServicePrice("первый сервис");
  let service2 = prompt("Какой еще сервис тебе нужен?").trim();
  let servicePrice2 = getValidatedServicePrice("второй сервис");
  let screenPrice = 12400; // Цена реализации одного экрана
  
  // Вычисляемые переменные проекта
  const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
  };
  
  const allServicePrices = getAllServicePrices();
  
  const getFullPrice = function() {
    return allServicePrices + screenPrice;
  };
  
  const fullPrice = getFullPrice();
  
  const getTitle = function(projectName) {
    return projectName.charAt(0).toUpperCase() + projectName.slice(1).toLowerCase();
  };
  
  const getServicePercentPrices = function(price) {
    const servicePercent = 0.1;
    return Math.round(price - price * servicePercent);
  };
  
  const getRollbackMessage = function(price) {
    if (price >= 30000) {
      return "Даем скидку в размере 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в размере 5%";
    } else {
      return "Скидка не предоставляется";
    }
  };
  
  // Получаем результаты всех операций
  const editedTitle = getTitle(titleProject);
  const servicePercentPrice = getServicePercentPrices(fullPrice);
  const rollbackMessage = getRollbackMessage(fullPrice);
  
  // Выводим результаты в консоль
  console.log("Название проекта:", editedTitle);
  console.log("Тип экрана:", screensValue);
  console.log("Респонсивный сайт:", responsive ? "Да" : "Нет");
  console.log("Сервис 1:", service1);
  console.log("Стоимость сервиса 1:", servicePrice1);
  console.log("Сервис 2:", service2);
  console.log("Стоимость сервиса 2:", servicePrice2);
  console.log("Стоимость экрана:", screenPrice);
  console.log("Стоимость всех дополнительных услуг:", allServicePrices);
  console.log("Полная стоимость проекта:", fullPrice);
  console.log("Итоговая стоимость для клиента:", servicePercentPrice);
  console.log(rollbackMessage);