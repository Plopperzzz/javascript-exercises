const findTheOldest = function(people) {
    return people.sort((a,b)=>{return (a.yearOfBirth - (a.yearOfDeath === undefined ? (new Date()).getFullYear() : a.yearOfDeath)) >= (b.yearOfBirth - (b.yearOfDeath === undefined ? (new Date()).getFullYear() : b.yearOfDeath)) ? 1 : -1})[0];
};

// Do not edit below this line
module.exports = findTheOldest;
