// Task B:
//Shunday function tuzing, u 1ta string parametrga ega bolsin,
//hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function count_digits(str) {
  let count = 0;
  for (let n of str) {
    if (n >= "0" && n <= "9") {
      count++;
    }
  }
  return count;
}

const result = count_digits("ah98mad7al3ie1v");
console.log(result);
