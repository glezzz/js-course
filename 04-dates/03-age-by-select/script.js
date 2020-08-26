/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
        document.querySelector("button").onclick = function (event) {

            let today = new Date();
            let dobday = document.getElementById("dob-day").value;
            let dobmth = document.getElementById("dob-month").value;
            let dobyr = document.getElementById("dob-year").value;
            let age = today.getFullYear() - dobyr;
            let m = today.getMonth() - (dobmth - 1);

            if (m < 0 || (m === 0 && today.getDate() < dobday)){
                age = age - 1;
            }

            alert(age);



        
    }

})();
