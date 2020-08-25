/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let one;
    let two;

    var performOperation = function(operation) {
        var symbol = document.getElementById(operation).id;
        switch (operation){
            case "addition":
                checkInput();
                var addition = parseInt(one) + parseInt(two);
                alert(addition);
                break;
            case "substraction":
                checkInput();
                var substraction = parseInt(one) - parseInt(two);
                alert(substraction);
                break;
            case "multiplication":
                checkInput();
                var multiplication = parseInt(one) * parseInt(two);
                alert(multiplication);
                break;
            case "division":
                checkInput();
                var division = parseInt(one) / parseInt(two);
                alert(division);
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
    function checkInput(){
        one = document.getElementById("op-one").value;
        two = document.getElementById("op-two").value;
    }
})();