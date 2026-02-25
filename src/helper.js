function genNum(n) {
    let arr = new Array(n);

    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

function sum(array){
    return array.reduce((sum, currVal) => sum + currVal, 0);
}

export {genNum, sum}