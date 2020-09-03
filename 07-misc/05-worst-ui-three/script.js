/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btnOne = document.getElementById("fix-part-one");
    let btnTwo = document.getElementById("fix-part-two");
    let btnThree = document.getElementById("fix-part-three");
    let btnFour = document.getElementById("fix-part-four");
    let btnOneValue = document.getElementById("part-one");
    let btnTwoValue = document.getElementById("part-two");
    let btnThreeValue = document.getElementById("part-three");
    let btnFourValue = document.getElementById("part-four");


    btnOne.onclick = function () {
        let a = Math.floor(Math.random() * 39) + parseInt(btnOneValue.dataset.min); // here we are adding the random nr to data-min (460)
        btnOneValue.value = a                                                          // hence the + before parseInt
        generateNr()
    }

    btnTwo.onclick = function () {
        let b = Math.floor(Math.random() * parseInt(btnTwoValue.dataset.max));  // here we * because we want a number
        btnTwoValue.value = b                                                      // between 1 and data-max (99)
        generateNr()
    }

    btnThree.onclick = function (){
        let c = Math.floor(Math.random() * parseInt(btnThreeValue.dataset.max));
        btnThreeValue.value = c
        generateNr()
    }

    btnFour.onclick = function (){
        let d = Math.floor(Math.random() * parseInt(btnFourValue.dataset.max));
        btnFourValue.value = d
        generateNr()
    }

    function generateNr (){
        document.getElementById("target").innerHTML = "0" + btnOneValue.value + btnTwoValue.value + btnThreeValue.value + btnFourValue.value;
    }



})();
