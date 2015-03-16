### Zadanie termometr

Napisz formularz, ktory bedzie posiadał jedno pole tekstowe. W wyżej wymienionym polu użytkownik będzie wpisywał temperaturę w celsjuszach. Po wysłaniu formularza poniżej wywietli się temperatura w fareheitach.

#### Zadania do wykonania:
1. Stwórz odpowiednie pliki:
  1. `index.html` w głównym katalogu i przekopiuj szkielet dostępny w tym przykładzie.
  2. `thermometer.js` w katalogu `js` i przekopiuj kod dostępny w tym przykładzie.
2. Napisz funkcję `celsjusToFahrenheit`, która przyjmuje jeden argument typu Number którym bedzie wartość stopni Celsjusza. Funkcja zwróci wartość typu Number czyli wartość w skali Fahrenheita.
3. Na samym początku skrypu stwórz zmienną `form`, której wartość będzie obiekt reprezentujący element `<form>` w kodzie HTML.
4. Za pomocą JS stwórz element `<p>`, przypisz go do zmiennej i przypnij do drzewa DOM (element ten, bedzie potem wyświetlał wynik obliczeń).
5. W odpowiednim miejscu w kodzie wywołaj wcześniej stworzoną funkcję z odpowiednim argumentem i przypisz wynik jako tekst elementu `<p>`.
6. * Zmodyfikuj kod w taki sposób, żeby wynik aktualizował się za każdym razem, gdy użytkownik wpisze znak. Podpowiedź [tutaj](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener).