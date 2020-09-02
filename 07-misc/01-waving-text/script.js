/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var text = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML = " ";

    let j = 1;     // var for fontsize number (1-7)
    let n = 1;
    for (let i = 0; i < text.length; i++){
        var y = text.charAt(i).fontsize(j);
        document.getElementById("target").innerHTML += y;
        if (i % 7 === 0){
            n++;
        }
        if (n % 2 === 0){
            j++;
        }else {
            j--;
        }
    }

})();
