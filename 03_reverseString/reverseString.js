const reverseString = function(str) {
    let backwardsStr = '';
    for (let i = str.length - 1; i > -1; i--){
        backwardsStr += str.slice(i);
        newStr = str.slice(0, i);
        str = newStr;
    }
    return backwardsStr;
}

// console.log(reverseString('hello mate'));
// Do not edit below this line
module.exports = reverseString;
