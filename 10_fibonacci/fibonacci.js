const fibonacci = function(n, a=0, b=1) {
    n = Number(n);
    if(n < 0)
    {
        return 'OOPS';
    }
    if(n<=1)
    {
        return b - (n===0);
    }
    else{
        return fibonacci(n-1,b, a+b);
    }

};

// Do not edit below this line
module.exports = fibonacci;
