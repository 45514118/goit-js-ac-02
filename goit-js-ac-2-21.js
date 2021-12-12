// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  let longestWord = " ";
  const words = string.split(" ");
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
