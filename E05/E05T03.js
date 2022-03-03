const initializeApplication = () => {

    let addButton = document.getElementById('add');
    
    addButton.addEventListener('click', () => {
        
        let newMessage = document.getElementById('newmessage').value;

        let newPN;
        let newTN;

        if (newMessage && newMessage.length > 0) {

            newPN = document.createElement('p');
            newTN = document.createTextNode(newMessage);

            newPN.appendChild(newTN);

            let allMessages = document.getElementById('messages');
            allMessages.appendChild(newPN);

            document.getElementById('newmessage').value = '';
        }

    });

};

window.addEventListener('load', () => {
    initializeApplication();
});