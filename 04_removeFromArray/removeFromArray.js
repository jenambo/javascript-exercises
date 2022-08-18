const removeFromArray = function(numlis, del) {
    for (let del of arguments){
        for (let i = 0; i < numlis.length; i++){
            if (numlis[i] === del) {
                numlis.splice(i, 1);
            } 
        }
    }
    return numlis;
};

// Do not edit below this line
module.exports = removeFromArray;
