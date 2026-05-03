let errorMessage = "ERROR"
const repeatString = function(stringToRepeat, num) {
    let repeatedString = ""
    if (num < 0) {
        return errorMessage
    } else {
        for (let i = 0; i < num; i++) {
            repeatedString = repeatedString + stringToRepeat
        }
        return repeatedString 
    }
};

// Do not edit below this line
module.exports = repeatString;
