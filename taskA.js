// Task:
// Write two parameter function that will count the letters included in parameter one.
const count_letter = (letter, str) => {
  // things i need
  //1: variable - to store the count of occurence
  //2: loop to loop throgh the string
  // 3: condition to check the letters involved in a given string!

  let count = 0;

  for (let position = 0; position < str.length; position++) {
    // method charAt() method returns the character at a specified index(position) in a string.
    // if (str.charAt(position) === letter)
    // alternative for aboe
    if (str[position] === letter) {
      count++;
    }
  }
  return count;
};
console.log(count_letter("a", "ahmadaliyeva"));

console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingiz uchun ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya kiriting", // 50-60
  "endi dam oling baribir foydasi yoq", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(() => {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("error:", err);
  else {
    console.log("answer:", data);
  }
});

console.log("passed here 1");
