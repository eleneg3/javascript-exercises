const removeFromArray = function(arr, thingsToRemove) {
    let thingsToRemoveArray = Array.from(arguments)
    let newArray = arr.filter(item => !thingsToRemoveArray.includes(item))
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

