"use strict";

/*Konstruktor */
function Message(message, date){
    
    var text;
    
    this.getText = function(){
        return message;
        
    };
    
    this.setText = function(_text){
      message = _text;  
        
    };
    
    this.getDate = function(){
        return date;
        
    };
    
    this.setDate = function(_date){
        date =new Date();
        
    };
}

Message.prototype.getHTMLText = function(){
    return (this.getText().replace(/[\n\r]/g, "</br>"));
};
