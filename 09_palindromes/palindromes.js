const palindromes = function (str) {
    let regex = /[a-zA-Z0-9-]+/g;
    let newStr =  str.toUpperCase().match(regex).join('');
    let revStr = newStr.split('').reverse().join(''); 

    console.log(newStr);
    console.log(revStr);
    return newStr === revStr;

};

// Do not edit below this line
module.exports = palindromes;
