const sumAll = function(num1, num2) {
    let sum = 0;
    let startNum = 0;
    let endNum = 0;

    if (num1 > num2){
        startNum = num2;
        endNum = num1;
    } else {
        startNum = num1;
        endNum = num2;       
    };

    if (startNum < 0 || endNum < 0){
        return 'ERROR';
    } else if (typeof startNum === 'string' || typeof endNum === 'string'){
        return 'ERROR';
    } else if (typeof startNum != 'number' || typeof endNum != 'number'){
        return 'ERROR'
    } else {
        for (let i = 0; i <= endNum; i++){
            sum += i;
        }
    }
    return sum;

};


// Do not edit below this line
module.exports = sumAll;

    // if (startNum < 0 || endNum < 0){
    //     return 'ERROR';
    // } else if (typeof startNum === 'string' || typeof endNum === 'string'){
    //     return 'ERROR';
    // }  else {
    //     for (let i = 0; i <= endNum; i++){
    //         sum += i;
    //     }
    // }
    // return sum;