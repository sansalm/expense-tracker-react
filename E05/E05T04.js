let blueBtn = document.getElementById('blue')
let greyBtn = document.getElementById('grey')
let whiteBtn = document.getElementById('white')


blueBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'blue';

    }
  });

  greyBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'grey';
      
    }
  });

  whiteBtn.addEventListener('click', event => {

    if (event.target.nodeName == "BUTTON") {
      document.body.style.backgroundColor = 'white';
      
    }
  });