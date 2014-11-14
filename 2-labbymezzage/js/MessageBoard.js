"use strict";

var messApp = {};
var Message = {};

    messApp.init = function(){
        
        var mess = new Message("TestarTestar", new Date());
        alert(mess);
        alert(mess.getHTMLText());
        mess.setText("Ett till test");
        alert(mess);
    }
window.onload = messApp.init;