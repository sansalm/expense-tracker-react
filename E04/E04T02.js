// Integer check
function isInteger(aYear) {

    if (aYear == parseInt(aYear, 10)) {
        return true;
    }

    return false;

} 

// Basic main function
function isLeapYear(aYear) { 

    if (aYear === undefined || aYear === null || aYear === '') {
        throw new Error('Argument aYear is missing.');

    }

    if (!isInteger(aYear)) {

        throw new Error('Argument aYear is not an integer.');

    }

    if ((aYear % 4 === 0) && (aYear % 100 !== 0 || aYear % 400 === 0)) {

        return true;

    }

    return false;

}

 
// With better error handling
function tryIsLeapYear(aYear) {

    try {

        return isLeapYear(aYear);

    } catch (e) {

        console.error(e.name + ' : ' + e.message);

    }
}


function displayResult() {

    let aYear = '2020.2';

    document.getElementById("sisalto").innerHTML = tryIsLeapYear(aYear);

}

displayResult();
