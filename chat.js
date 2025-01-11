function sendMessage(){
    var div = document.getElementById("message-container");
    var message = document.createElement("p");
    message.setAttribute("class", "main-message");
    var writtenMessage = document.getElementById("message").value;
    var textNode = document.createTextNode(writtenMessage)
    message.appendChild(textNode);
    div.appendChild(message);
    document.getElementById("message").value = "";
}