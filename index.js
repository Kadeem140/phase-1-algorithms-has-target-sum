/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(array, target) { //Takes 2 arguments
  // Write your algorithm here
  for(i = 0; i < array.length -1; i++){ //1st loop for one index value
    for(j = (i + 1); j < array.length; j++){ //2nd loop for second index, increment i value for next index value
      if (array[i] + array[j] == target){ //compare array at both indexes and compare them to the target
          return true                   //if true return true
      }
    }
  }
  return false
}


/* 
  Add your pseudocode here
*/ 
// variable for i, index
// for or loop through array, 
//statement for if array[i++]
/*

  Add written explanation of your solution here
*/
//write a func that takes two arguments, an array of ints and a target int
//if the sum of the values at any 2 indexes equal the target int return true


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
