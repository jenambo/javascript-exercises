const repeatString = function(string, number) {
    let str = '';
    if (number >= 0){
        for (let i = 0; i < number; i++){
            str += string;
        } 
    } else {
        str += 'ERROR';
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
