function hasTargetSum(array, target) {
  // Write your algorithm here
const seenNumbers = {}

for (let i = 0; i < array.length; i++) {
  const complement = target - array[i]
  if (seenNumbers[complement]) return true
  seenNumbers[array[i]] = true
}
return false

//  for (let i=0; i < array.length; i++) {
//   const complement = target-array[i]
//   for (let j = i + 1; j < array.lenght; j++)
//     if(array[j] === complement) return true
//  }
//  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
    take in the array, check the sum of each pair of numbers
    check the sum of each pair of numbers against target number
    if target number = any array pair sum return true
    otherwise return false
  */
 
 /*
 Add written explanation of your solution here
 write a function that takes in an array, and a target number
 function should return true if any pair of number adds up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
