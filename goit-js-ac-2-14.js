// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls    - массив из первых двух элементов
// nonExtremeEls  - массив из всех элементов кроме первого и последнего
// lastThreeEls   - массив из трёх последних элементов

const fruits = ["apple", "plum", "pear", "orange", "banana"];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);
