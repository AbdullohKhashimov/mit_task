// Task D:
/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan iborat
 bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

const checkContent = (a, b) => {
  const arr = b.split("");
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (a.length === arr.length && a.includes(arr[i])) {
      count++;
    }
    new_arr.push(count);
  }
  if (new_arr.includes(0)) {
    return false;
  } else {
    return true;
  }
};

const result = checkContent("mitgroup", "groupmti");
console.log(result);
