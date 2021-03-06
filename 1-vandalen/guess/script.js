"use strict";

window.onload = function(){
		
	// Detta tal behöver bytas ut mot ett slumpat tal.
	var min = 1;
	var max = 100;
	var secret = Math.floor(Math.random() * (max - min) +1) + min;
	var guesses = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret);
		console.log("Du gissade: " + number);
		
		if (min <= number && number <= max)
		{
            guesses = guesses += 1;
			if (secret < number) {
				return [false, "Du gissade på " + number + ". Det hemliga talet är mindre! Gissa igen :-)</br> Du har gissat " + guesses + " gånger "];
			}
			else if( secret > number){
				return[false, "Du gissade på " + number + ". Det hemliga talet är högre! Gissa igen :-)</br> Du har gissat " + guesses + " gånger "];
			}
			else
			{
				return[true, "Helt rätt det hemliga talet var " + secret + " och det gick åt " + guesses + " gissningar att lösa det</br>Bra Jobbat !!"];
			}
        }
		else 
		{
			return[false, "Du måste hålla dig inom intervallet  1 - 100, försök igen !"];
		}
	
	
				
	};
	
	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};