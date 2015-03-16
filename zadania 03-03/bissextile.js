var isBissextile = function(year) {

	return (year%4 === 0 && year%100 !== 0) || (year%400 === 0);

};


var form = document.getElementsByTagName('form')[0];

var paragraph = document.createElement('p');
document.body.appendChild(paragraph);

form.addEventListener('submit', function(e) {
	e.preventDefault();
	var year = form.year.value;
	
	if (isBissextile(year) == true) {
		paragraph.innerText = "Rok " + year + " jest przestępny";
	}
	else {
		paragraph.innerText = "Rok " + year + " nie jest przestępny";
	}

});


//KTÓRY DZIEŃ W ROKU
var dayInAYear = function (day, month, year) {

	nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	month = month - 1;

	var months;
	if (isBissextile(year) === true) {
		months = leapYear;
	}
	else  {
		months = nonLeapYear;
	}

	var number = 0;
	for (var i = 0; i < month; i++) {
		number = number + months[i];
	}
	return number + day;
};