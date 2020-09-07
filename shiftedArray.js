/*
ordered array that is shifted unknown number of times
find where a given number is
othwerwise return -1
*/

function findNumber(arr = [], findme = false) {
// Time O(N)
// Space O(1)

    if (!findme) return -1;

    for (f=0; arr.length-1; f++) {
        if (findme === arr[f]) return f;
    }
    return -1;
}

function findNumber2(arr = [], findme = false) {
    // Time O(logn(N)
    // Space O(1)
    
        if (!findme) return -1;

        function findPivot (arr) {
            let leftIdx = 0;
            let rightIdx = arr.length-1;

            console.log(arr);

            while (leftIdx<=rightIdx) {
                let middle = leftIdx + Math.floor((rightIdx-leftIdx)/2);
                console.log(leftIdx + ' ' + rightIdx + ' ' + middle + ' ' + arr[middle]);
                
                if (arr[middle]<arr[middle-1] || middle === 0) return middle;

                (arr[middle]>arr[0]) ? leftIdx = middle+1 : rightIdx = middle-1;
            }
        }

        function binarySearch(arr = [],left = 0, right, findMe = 0) {
            let IndexLeft = left;
            let IndexRight = right || arr.length-1;
        
            while (IndexLeft<=IndexRight) {
                let middle = Math.floor((IndexRight-IndexLeft)/2)+IndexLeft;
                //console.log(middle + ' ' + IndexLeft + ' ' + IndexRight + ' '+ arr[middle]);
                if (findMe == arr[middle]) return true;
                (findMe>arr[middle]) ? IndexLeft = middle + 1 : IndexRight = middle -1;
            }
            return false;
        }

        const pivot = findPivot(arr);

        if (pivot===0 || findme<arr[0]) return binarySearch (arr, pivot, arr.length-1, findme);
        return binarySearch (arr, 0, pivot-1, findme);
    }
//console.log(findNumber([5,6,1,2,3,4],2));
console.log(findNumber2([5,6,1,2,3,4],2));