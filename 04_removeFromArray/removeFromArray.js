const removeFromArray = function(arr, ...args) {
    let retArr = [];
    let inclusionFlag = true;

    for(let i = 0; i < arr.length; ++i)
    {
        for(let j = 0; j < args.length; ++j)
        {
            if(arr[i] === args[j])
            {
                inclusionFlag = false;
                break;
            }
        }
        if(inclusionFlag)
        {
            retArr.push(arr[i]);
        }
        inclusionFlag = true;
    }

    return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;
