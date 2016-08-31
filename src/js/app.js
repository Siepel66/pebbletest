var UI = require('ui');
var Light = require('ui/light');

//var ws = new WebSocket('ws://echo.websocket.org');
var ws = new WebSocket('ws://new.siepelstad.info:8080'); // Replace with IP of computer running server

ws.onmessage = function (event) {

function onOpen(evt)
{
   ws.send("WebSocket rocks");
}

ws.onopen = function(evt) { onOpen(evt) };

var card = new UI.Card();
    //card.title('Data from server');
    //card.body(event.data);
    Light.trigger();
    card.banner("ID_BELL");
    card.show();
};

card.show();
