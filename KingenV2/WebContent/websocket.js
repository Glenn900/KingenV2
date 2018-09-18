var ws;

function connect() {
    var username = document.getElementById("username").value;
    
    var host = document.location.host;
    var pathname = document.location.pathname;
    
    ws = new WebSocket("ws://" +host  + pathname + "chat/" + username);

    ws.onmessage = function(event) {
        var message = JSON.parse(event.data);
        switch(message.from) {
        case "System":
        	var log = document.getElementById("log");
            console.log(event.data);
            log.innerHTML += message.from + " : " + message.content + "\n";
            var kingenCanvas = document.getElementById("kingenCanvas");
            kingenCanvas.style = "";
        	break;
        default:
        	var log = document.getElementById("log");
            console.log(event.data);
            log.innerHTML += message.from + " : " + message.content + "\n";        	
        }
        

    };
}

function send() {
    var content = document.getElementById("msg").value;
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);
}

function sendCreateRoom() {
	var content = "/NewRoom:";
	var roomName = document.getElementById("roomName");
	content += roomName.innerHTML;
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);	
}