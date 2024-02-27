const repeatString = function(str, num) {

    if(num < 0){
        return 'ERROR';
    }
    let tempStr = str;
    let retStr = '';

    for(let i = 0; i < num; ++i)
    {
        retStr += tempStr;
    }
    return retStr;
};

// Do not edit below this line
module.exports = repeatString;
