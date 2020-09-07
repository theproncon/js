
function binaryGap(num) {
    const binaryNum = num.toString(2);

    console.log(num + ' is in binary: ' + binaryNum);

    let arrNum = Array.from(binaryNum);

    while (arrNum.length-1>0) {
        if (arrNum[arrNum.length-1] === '1') {
           break;
        } 
        arrNum = arrNum.slice(0,arrNum.length-1);
    }
   
    console.log('valid array: ' , arrNum);

    let strBinary ='';

    arrNum.forEach ((item, index) => {
        strBinary +=item;
    });
    console.log('str: ' + strBinary);
    let arrGaps = strBinary.split('1');

    let filtered = arrGaps.filter(function(value, index, arr){ return value !=='';});

    let sizeOfGaps = 0;

    console.log(filtered);
    filtered.forEach((item, index) => {

        const itemSize = item.length;
        filtered = itemSize>filtered ? itemSize : filtered;
    });

    if (sizeOfGaps===0) {
        console.log('without binary Gap.');
        return;
    }
    console.log('Largest Binary Gap is ' + sizeOfGaps);
}


//binaryGap(214748364);
console.log('\n');
binaryGap(15);
console.log('\n***************\n');
binaryGap(32);
console.log('\n***************\n');
binaryGap(100000);
