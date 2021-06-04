/*
    CIT 281 Project 3 module
    Name: Meagan Kiefer
*/

// array of valid coin numbers
//let coins = ['1', '5', '10', '25', '50', '100'];

// checks if coin matches the coins array, returns true if true
function validDenomination(coin) { 
    if (coins.indexOf(coin) !== -1) {
        return "true";
    }
}

function valueFromCoinObject(obj) {
    const { denom, count = 0 } = obj;
    return denom * count; 
}

// console.log(valueFromCoinObject({denom: 5, count: 3}));

function valueFromArray(arr) {
    return arr.reduce((accumulator, currentValue) => { 
        return accumulator + valueFromCoinObject(currentValue)
}, 0);
}


function coinCount(...coinage) {
    return valueFromArray(coinage);
}

// console.log("{}", coinCount({denom: 5, count: 3})); 
// console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2})); 
//const coins = [{denom: 25, count: 2},{denom: 1, count: 7}]; 
// console.log("...[{}]", coinCount(...coins)); 

module.exports = {
    coinCount
}