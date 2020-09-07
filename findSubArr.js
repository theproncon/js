const big = [
    [1,2,3,4,5,6,7,8,9,0],
    [1,1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3,3]
];
const small = [
        [2,3,4],
        [1,1,1],
        [2,2,2]
]

function buildSubArray(xx,yy) {
    let bArr = [];
    let cx=0;

    for (let x=xx; x<=bigx;x++) {
        let arr =[];
        for (let y=yy; y<=bigy;y++) {
    
            arr.push(big[x][y]);
            if (arr.length===smally) {
                bArr.push(arr);
                break;
            }
            
        }
        if (cx === smallx-1) {
            return bArr;
        }
        cx++;

    }
}

function arrToString(arr) {
    tempStr = '';
    arr.forEach(elem => {
        let s = JSON.stringify(elem);
        tempStr =tempStr.concat(s);
    });

    return tempStr;
}

function compareArrs(arr) {
    
    const tempStr = arrToString(arr);

    if (JSON.stringify(tempStr)==JSON.stringify(smallStr)) {
        console.log('FOUND IT');
        return process.exit();
        ;
    }
}

/*
* Building Arrays from the Bigger with the same dimensions as the Small array
* Each subArray built is compared with the small array
* If the match we exit
* The comparison is done by parsing both the Small and the SubArray to a string and then do a strict comparisation.
*/

const bigx = big.length;
const bigy = big[0].length;

const smallx = small.length;
const smally = small[0].length;

const smallStr = arrToString(small);

for (let x=0; x<=(bigx-smallx);x++) {
    let arr=[];
    for (let y=0; y<=(bigy-smally);y++) {

        arr = buildSubArray(x,y);
        console.log(' ');
        console.log(arr);
        console.log(small);

        compareArrs(arr);
            
    }
}
console.log('SMALL ARRAY NOT FOUND');