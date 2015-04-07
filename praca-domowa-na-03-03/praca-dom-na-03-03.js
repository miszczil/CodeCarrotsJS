 //Zadanie 3

 var osoby = [
  'Artur Delura',
  'Gosia Ksionek',
  'Michał Matulka',
  'Zuza Podwińska'
];

var mentorzy = document.createElement('ul');

for (var k in osoby) {
  var osoba = document.createElement('li');
  osoba.innerText = osoby[k];
  mentorzy.appendChild(osoba);
}

document.body.appendChild(mentorzy);


/* Zadanie 4 - CSS 

li.fancy {
  font-weight: bold;
  color: #FF0066;
  text-transform: uppercase;
  
}

*/

mentorzy.childNodes[1].classList.add('fancy');

//Zadanie 5

var createElementWithText = function(tag, text) {
	var element = document.createElement(tag);
	element.innerText = text;
	return element;
};

//Zadanie 6


var osoby = [
  'Artur Delura',
  'Gosia Ksionek',
  'Michał Matulka',
  'Zuza Podwińska',
  'Basia Litwińska',
  'Kubuś Puchatek'
];

var mentorzy = document.createElement('ul');

for (var k in osoby) {
  
  var osoba = createElementWithText('li', osoby[k]);
  mentorzy.appendChild(osoba);
}

document.body.appendChild(mentorzy);