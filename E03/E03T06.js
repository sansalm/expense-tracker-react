function getRandomIntegerFromRange(startRange, endRange) {

    var x = (Math.random() * (endRange - startRange) + startRange);
    return x.toFixed(0)

}

//console.log(getRandomIntegerFromRange(4, 10))


function getTimeDifferenceInFullDays(startRange, endRange) {
    return Math.round((Date.parse(endRange) - Date.parse(startRange)) / (86400000));

}

console.log(getTimeDifferenceInFullDays('01/10/2022', '02/15/2022'))