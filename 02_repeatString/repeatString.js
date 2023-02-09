const repeatString = function(string, times) {
    var repeatedWords = "";
    while (times > 0) {
        repeatedWords += string;
        times--;
    }

    return repeatedWords;

};

// Do not edit below this line
module.exports = repeatString;
