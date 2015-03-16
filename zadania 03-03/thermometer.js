var form = document.getElementsByTagName('form')[0];

var paragraph = document.createElement('p');
document.body.appendChild(paragraph);

var celsiusToFahrenheit = function(degrees) {
	return degrees*9/5+32;
};

form.addEventListener('submit', function(e) {
  var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  paragraph.innerText = celsiusToFahrenheit(celsjusz);
});




