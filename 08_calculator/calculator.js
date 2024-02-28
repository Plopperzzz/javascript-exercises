const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((a,b)=>a+b,0);
};

// logarithmic multiple without the * operator
// wrong input type though...
/*
const multiply = function(a, b, acc=0) {
  if(b == 1)
  {
    return a + acc;
  }
  if(a == 1)
  {
    return b + acc;
  }
  if(b%2 == 1)
  {
    return multiply(a + a, b >> 1, acc + a);
  }
  else{
    return multiply(a + a, b>>1, acc);
  }
};
*/
const multiply = function(arr){
  return arr.reduce((a,b) => a*b, 1);
}

const power = function(x, y, acc=1) {
  return y == 1 ? x*acc : y%2==1 ? power(x * x, y >> 1, acc*x) : power(x*x, y>>1, acc);
};

const factorial = function(num) {
  let res = 1;
  let limit = num;
  for(let i = 0; i < limit; ++i)
  {
    res *= num--;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
