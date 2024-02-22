/*F-TASK: 

Shunday findDoublers function tuzing, 
unga faqat bitta string argument pass bolib, 
agar stringda bir hil harf qatnashgan bolsa true, 
qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

@MITASK
*/

const getDoublers = (str) => {
  // convert the string to array
  const arr = str.split("");
  const new_arr = [...new Set(arr)];

  if (arr.length !== new_arr.length) {
    return true;
  } else {
    return false;
  }
};
const result = getDoublers("hello");
console.log("result:", result);
