var drawNumber = function(min, range) {
	Math.floor((Math.random() * range) + min); 
};


var numberComp = 
var numberUser;

var form = document.getElementsByTagName('form')[0];

var compareNumbers = function(numberComp, numberUser) {
	if (numberComp < numberUser) {
		return 2;
	}
	else if (numberComp > numberUser) {
		return 1;
	}
	else {
		return 0;
	}
};

var i = 0;

	form.addEventListener('submit', function(e) {
		
		e.preventDefault();
		alert(numberComp);
		numberUser = form.liczbaUz.value; 
		
		var paragraph = document.createElement('p');
		document.body.appendChild(paragraph);

		var wynik = compareNumbers(numberComp, numberUser);
	    
	    if (wynik === 0) {
	    	paragraph.innerText = "Liczba odgadnięta!";
	    	window.location = 'gratulacje.html';
	    }
	    else if (wynik === 1) {
	    	paragraph.innerText = "Twoja liczba jest mniejsza od wylosowanej liczby!";
	    	i = i + 1;
	    }
	    else {
	    	paragraph.innerText = "Twoja liczba jest większa od wylosowanej liczby!";
	    	i = i + 1;
	    }

	    if (i >= 5) {
	    	window.location = 'przegrana.html';
	    }
	});


