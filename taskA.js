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
