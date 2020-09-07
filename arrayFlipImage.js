/*
Given a binary matrix, we want to flip the image horizontally and then invert it
example: 
Input: [[1,1,0], [1,0,1], [0,0,0]]
Output: [[1,0,0], [0,1,0], [1,1,1]]
*/

function flipAndInvertArray(arr = []) {
    let newArr = [];
    for (f=0;f<arr.length; f++){
        const subArr = arr[f];
        let tempArr = [];
        for (i=subArr.length-1; i>-1; i--){
            const invertBinaryVal = (subArr[i] === 0) ? 1 : 0; 
                tempArr.push(invertBinaryVal);
        }

        newArr.push(tempArr);
    }
    return newArr;
}

console.log('-> ' + [[1,1,0], [1,0,1], [0,0,0]]);
console.log('<- ' + flipAndInvertArray([[1,1,0], [1,0,1], [0,0,0]]));