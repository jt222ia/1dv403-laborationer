"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	
	
	var convertString = function(str){
	var strLength = str.length;
    var k;
    var stringArray = [];
	 

        if (str === "")
		{ 
			// Undantag kastas!
            throw new Error("Du måste skriva in text i fältet, tack!");
        }
        
        for (k = 0; k < strLength; k += 1) {
            
            stringArray[k] = str[k]; // sätter in text-strängen i en array
            
            if (stringArray[k] === "a" || stringArray[k] === "A") 
			{ 
				// Omvandlar a och A till #
                stringArray[k] = "#";
                
            } else if (stringArray[k] === stringArray[k].toUpperCase())
			{ 
				// omvandlar UpperCase-bokstäver till LowerCase
               stringArray[k] = stringArray[k].toLowerCase();

            } else if (stringArray[k] === stringArray[k].toLowerCase()) { // omvandlar LowerCase-bokstäver till UpperCase
                
                stringArray[k] = stringArray[k].toUpperCase();
            }
        }
        return stringArray.join(""); // returnerar en sträng utav arrayen
	// Plats för förändring.		
	// Returnera den konverterade strängen.
	// Vid fel, kasta ett undantag med ett meddelande till användaren. 

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};