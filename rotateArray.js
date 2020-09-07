function rotateArray(arr = [], numRotations = 0) {

    let tempArr = [];
    let arrTemp = [];
    const arrSize = arr.length;
    
    console.log (arrSize);
    console.log(arr);

    arrTemp = arr;
    

    
    for (let f=0; f<numRotations; f++) {
        tempArr = [];
        tempArr.push(arrTemp[arrSize-1]);
        for (let i=0; i<arrSize-1;i++) {
            tempArr.push(arrTemp[i]);
        }
        console.log(tempArr);
        arrTemp = tempArr;
    }
    return tempArr;
}

rotateArray([1, -1, -200],200);