window.onload = function() {
    submitMsg.onclick = function() {
        var  message = msg.value;
        var elLi = document.createElement('li');
        elLi.innerText =message;
        messages.appendChild(elLi);
    }
       
    
};