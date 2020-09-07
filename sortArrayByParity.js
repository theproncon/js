/*
Given an array return a arra with first the evens and then the odds
ex: 
Input: [3,1,2,4]
Output: [2,4,3,1]
*/

function sortArrayByParity1( arr = []) {
 // Time: O(N)   
 // Space: O(N)
    let OddArray = [];
    let EvenArray = [];

    arr.forEach(element => {
      if (element%2 ===0) {
        EvenArray.push(element);
      } else {
          OddArray.push(element);
      }
    });

    return EvenArray.concat(OddArray);
}


function sortArrayByParity( arr = []) {
    // Time: O(N)
    // Space: O(1)
    let index = 0;
    for (i=0; i<arr.length; i++) {
      if (arr[i]%2 ===0) {
          let temp = arr[index];
          arr[index] = arr[i];
          arr[i] = temp;
          index++;
      }
    };

    return arr;
}
console.log(sortArrayByParity([3,6,-2,1,2,4, -1]));