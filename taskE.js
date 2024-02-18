/*E-TASK: 

Shunday function tuzing,
 u bitta string argumentni qabul
  qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"

@MITASK
*/

function string_reverse(str) {
  // empty string
  let new_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    new_str += str[i];
  }
  return new_str;
}
const result = string_reverse("abdulloh");
console.log("result:", result);

// another way
const reversed = (str) => {
  // return a new array of string
  const array_string = str.split("");
  console.log(array_string);

  // reverse the string into the created array elements
  const reversed_arr = array_string.reverse();
  console.log(reversed_arr);

  // join all the array elements into the string
  const join_all_arr = reversed_arr.join("-");
  console.log(join_all_arr);

  // return the reversed string
  return join_all_arr;
};
const result3 = reversed("Hello");
// console.log("result3:", result3);
