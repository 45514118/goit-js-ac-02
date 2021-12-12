// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    let j = order[i];
    total += j;
  }
  return total;
}
