function sum(a, b = 2) {
    return a + b;
}       

//console.log(sum(3));


function sum(...nums) {
    return nums.reduce((previous, current) => {
      return previous + current;
    });

  }

  console.log(sum(1, 2, 3));