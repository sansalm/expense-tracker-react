function isLeapYear(aYear) {
    if (aYear % 4 === 0 && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
    }

    return false;

}


function displayResult() {

    var exampleYear = 2020;
  
    document.getElementById("sisalto").innerHTML = isLeapYear(exampleYear);
  
  }

window.onload = displayResult;  