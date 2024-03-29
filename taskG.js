let array = [5, 21, 12, 21, 8];
function getHighestIndex(arr) {
  // defining new variable
  let greatest;
  let greatestIndex;
  // looping through the arr parameter of function
  for (let i = 0; i < arr.length; i++) {
    // giving the condition if a found number is not the greatest
    // in that case arr[i] is greater than that.
    if (!greatest || arr[i] > greatest) {
      greatest = arr[i];
      // if not the greatestIndex = looped array of i
      greatestIndex = i;
    }
  }
  return greatestIndex;
}
const result = getHighestIndex(array);
console.log("result:", result);
