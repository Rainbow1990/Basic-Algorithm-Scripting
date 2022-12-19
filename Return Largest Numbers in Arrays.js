function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let Array = arr[i];
    let HighestValue = -Infinity;
    for (let j = 0; j < Array.length; j += 1) {
      if (HighestValue < Array[j]) {
        HighestValue = Array[j];
      }
    }
    result.push(HighestValue);
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));