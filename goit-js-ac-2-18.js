// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
