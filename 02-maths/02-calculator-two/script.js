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
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                alert(a + b);
                break;
            case "substraction":
                alert(a - b);
                break;
            case "multiplication":
                alert(a * b);
                break;
            case "division":
                alert(a / b);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

/* first attempt
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
 */