/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for (var x=1; x<=100; x++){
        if (x % 3===0 && x % 5===0) {
            console.log("fizzbuzz");

        }else if (x % 3===0){
            console.log("fizz");

        }else if (x % 5===0){
            console.log("buzz");

        }else {
            console.log(x);
        }

    }


})();
