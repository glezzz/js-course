/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var count = 0;
    var countBtn = document.getElementById("increment");
    var displayCount = document.getElementById("target");

    countBtn.onclick = function () {
        count++;
        displayCount.innerHTML = count;
        localStorage.setItem("count", count);
        
    }

})();
