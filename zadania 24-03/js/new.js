//1
var logo = document.getElementById('ggc-logo');

//2
logo.classList.add('active');

//3
var foo = document.getElementById('nazwa');

//4
foo.innerText = "Sara";

//5
var section2 = document.getElementsByTagName('section')[1];

//6
section2.classList.remove('hidden');

//section2 - 1
document.getElementsByTagName('section')[0].classList.add('hidden');

//section2 - 2
//2.1
var obrazek = document.createElement('img');

//2.2
obrazek.src = './gfx/code.png';
//dluzszy sposob:
//obrazek.setAttribute('src', './gfx/code.png'); 

//2.3
var code = document.getElementById('code');
code.appendChild(obrazek);

//section2 - 3
//3.1
code.style.backgroundColor="white";

//3.2
code.firstChild.style.marginLeft='-510px';

//JESZCZE WIĘCEJ ZADANEK <33

var btn = document.createElement('button');
btn.innerText = "Trick!";
btn.addEventListener('click', function () {
	trick();
});
document.body.appendChild(btn);

var btn2 = document.createElement('button');
btn2.innerText = "Are you done?";
btn2.addEventListener('click', function () {
	iamdone();
});
document.body.appendChild(btn2);






