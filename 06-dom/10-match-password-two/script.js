/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        var password = document.getElementById("pass-one");
        var reenter = document.getElementById("pass-two");

        if (password.value === reenter.value){

        }else{
            password.classList.add("error")
            reenter.classList.add("error")
        }

    })

})();
