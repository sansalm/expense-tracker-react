function isLeapYear(aYear) {
    if (aYear % 4 === 0 && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
    }

    return false;

}


function displayResult() {

    let exampleYear = document.getElementById("aYear").value;
  
    document.getElementById("sisalto").innerHTML =
        isLeapYear(exampleYear) ? "On karkausvuosi." : "Ei ole karkausvuosi.";
  
  }

