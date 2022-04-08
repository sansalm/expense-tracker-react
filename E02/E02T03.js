const convertToMinutesFormat = hoursInHundreths => {
    var sign = hoursInHundreths < 0 ? "-" : "";
    var min = Math.floor(Math.abs(hoursInHundreths));
    var sec = Math.floor((Math.abs(hoursInHundreths) * 60) % 60);
    
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

}

console.log(convertToMinutesFormat(3.40))

// Jos on vain yksi argumentti, niin parametriluettelon sulkuja ei tarvitse kirjoittaa
// Esim. const nelioi = (luku) => { return luku*luku }
// Esim. const nelioi = luku => { return luku*luku }
// Jos on vain yksi lauseke, niin aaltosulkuja ei tarvita. Huom silloin myös return pois
// Esim. const nelioi = luku => luku*luku;

const displayResult = () => {

    var inputNumber = document.getElementById("hoursInHundreths").value;
  
    document.getElementById("sisalto").innerHTML =
        convertToMinutesFormat(inputNumber) ? 
            `Given number in hours and minutes equal to 
                 ${convertToMinutesFormat(inputNumber)}` : "";

  }

