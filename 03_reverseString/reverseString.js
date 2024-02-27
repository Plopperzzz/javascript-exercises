const reverseString = function(str) {
    let retStr = '';
    
    for(let i = str.length - 1; i >=0; --i)
    {
        retStr += str[i];
    }
    
    return retStr;
};

// Do not edit below this line
module.exports = reverseString;
