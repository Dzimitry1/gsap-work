const gameBotFunction = function() {
  let tries = 3;
  let mysteryNumber = randomGenerate(1, 100);

  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  function randomGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const askNumber = function() {
    if (tries <= 0) {
      if (confirm("Попытки закончились. Хотите попробовать снова?")) {
        tries = 3;
        mysteryNumber = randomGenerate(1, 100);
        askNumber();
      } else {
        alert("Игра окончена.");
        return;
      }
    } else {
      let userInput = prompt(`Угадайте число от 1 до 100. У вас осталось попыток: ${tries}`);

      if (userInput === null) {
        alert("Вы завершили игру");
        return;
      }

      userInput = userInput.trim();

      if (!isNumeric(userInput)) {
        alert("Это не число. Введите число!");
        askNumber();
      } else {
        let answerNum = Number(userInput);

        if (answerNum < mysteryNumber) {
          alert(`Больше, чем ${answerNum}. Осталось попыток: ${--tries}`);
          askNumber();
        } else if (answerNum > mysteryNumber) {
          alert(`Меньше, чем ${answerNum}. Осталось попыток: ${--tries}`);
          askNumber();
        } else {
          alert(`Поздравляем! Вы угадали число. Это было число ${mysteryNumber}.`);
          if (confirm('Хотите начать заново?')) {
            tries = 3;
            mysteryNumber = randomGenerate(1, 100);
            askNumber();
          } else {
            alert("Игра окончена.");
          }
        }
      }
    }
  };

  askNumber();
};

gameBotFunction(); // Вызываем функцию, чтобы начать игру