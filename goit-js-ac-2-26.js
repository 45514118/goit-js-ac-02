// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  }
  return total;
}
