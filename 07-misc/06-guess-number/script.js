/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let x = Math.floor(Math.random() * 101);
    var pick = prompt("Pick a number between 1 and 100");
    let counter = 1

    while (pick != x) {
        counter++;

        if (pick > x) {
            var pick = prompt("Lower");

        }
        if (pick < x) {
            var pick = prompt("Higher");

        }
    }

    alert("That's it! You needed " + counter + " guesses");


})();