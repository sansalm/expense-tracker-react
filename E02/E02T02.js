const containsNumber = function(numbers, aNumber) {

    for(let i=0; i < numbers.length; i++) {
       if (numbers[i] === aNumber) {
           return true;
       }
    }

    return false;

};


function displayResult() {

    var someNumbers = [1, 3, 4, 2, 9, 8, 6, 7];
    let aNumberToSearch = 5;

    document.getElementById("sisalto").innerHTML = 
        containsNumber(someNumbers, aNumberToSearch) ?
            `The array contains number ${aNumbertoSearch}.` : 
                `Array doesn't contain number ${aNumberToSearch}.`;
  
  }

window.onload = displayResult;

  