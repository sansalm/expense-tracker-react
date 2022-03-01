// Integer check
function isInteger(aNumber) {

    if (aNumber == parseInt(aNumber, 10)) {
        return true;
    }

    return false;

} 

// Basic main function
function isLeapYear(aYear) {

    if ((aYear % 4 === 0) && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
    }

    return false;

}
 
// With better error handling
function tryIsLeapYear(aYear) {

    try {

        if (aYear === undefined || aYear === null || aYear === '') {
            throw new Error('Argument aYear is missing.');

        }

        if (!isInteger(aYear)) {
            throw new Error('Argument aYear is not an integer.');
        }

        return isLeapYear(aNumber);

    } catch (e) {

        console.error(e.name + ' : ' + e.message);

        //jos onnistutaan käsittelemään ongelmatilanne
        //...
        //if ("was handled.") {
            //return isLeapYear(luku);
        //}

        //throw new Error('Leap year cannot be checked.');

    }
}


function displayResult() {

    let aYear = '';

    document.getElementById("sisalto").innerHTML = tryIsLeapYear(aYear);

}

displayResult();