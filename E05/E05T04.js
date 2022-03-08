let blueBtn = document.getElementById('blue')
let greyBtn = document.getElementById('gray')
let whiteBtn = document.getElementById('white')


blueBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'blue';

    }
  });

  greyBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'gray';
      
    }
  });

  whiteBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'white';
      
    }
  });