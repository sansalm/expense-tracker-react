const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

storageInput.addEventListener('input', character => {
    text.textContent = character.target.value

});

const saveToLocal = () => {
    localStorage.setItem('textinput', text.textContent) 
}

button.addEventListener('click', saveToLocal)

