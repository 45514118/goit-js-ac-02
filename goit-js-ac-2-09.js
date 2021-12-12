// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}
