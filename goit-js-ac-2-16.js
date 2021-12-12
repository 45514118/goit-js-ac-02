// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходныхfirstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
  let thirdArray = firstArray.concat(secondArray);
  if (thirdArray.length <= maxLength) {
    return thirdArray;
  }
  if (thirdArray.length > maxLength) {
    return thirdArray.slice(0, maxLength);
  }
}
