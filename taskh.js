/* H-TASK: 

shunday function tuzing, u integerlardan iborat 
arrayni argument sifatida qabul qilib, 
faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK */

function getPositive(str) {
  return str.reduce((result, number) => {
    if (number > 0) {
      result += number.toString();
    }
    return result;
  }, "");
}
const result = getPositive([1, -4, 2]);
console.log(result);
