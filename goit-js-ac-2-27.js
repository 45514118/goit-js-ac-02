// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}
