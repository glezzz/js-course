/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age = prompt("How old are you?");
    var gender = prompt("What gender are you?");
    var town = prompt("Where do you live?");

    if(confirm(age + " " + gender + " " + town)){

    }else {
        prompt("How old are you?");
        prompt("What gender are you?");
        prompt("Where do you live?");

    }

})();

/* first attempt
    var age = window.prompt("How old are you?");
    var gender = window.prompt("Are you male or female or offended?");
    var town = window.prompt("Where do you live?");

    if (confirm(age + " " + gender + " " + town)) {

    }else {
        var age = window.prompt("How old are you?");
        var gender = window.prompt("Are you male or female or offended?");
        var town = window.prompt("Where do you live?");
    }
 */