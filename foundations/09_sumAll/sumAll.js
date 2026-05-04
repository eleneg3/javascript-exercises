const sumAll = function(numOne, numTwo) {
    let numberArray = [] 
    let errorMessage = "ERROR"
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne <=0 || numTwo <= 0) {
        return errorMessage
    } else if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            numberArray.push(i)
        }
        return numberArray.reduce((acc, current) => acc + current, 0)
    } else if (numTwo < numOne) {
        let numberArray = []
        for (let i = numTwo; i <= numOne; i++) {
            numberArray.push(i)
        }
        return numberArray.reduce((acc, current) => acc + current, 0)
    }  
};

// Do not edit below this line
module.exports = sumAll;
