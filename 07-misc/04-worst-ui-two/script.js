/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let btnOne = document.getElementById("part-one");
    let btnTwo = document.getElementById("part-two");
    let btnThree = document.getElementById("part-three");
    let btnFour = document.getElementById("part-four");
    let i = 0;  //value

    btnOne.onclick = function () {
        i = parseInt(btnOne.innerHTML); // without this it would start from 1 instead of from 460
        if (i < btnOne.dataset.max) {    //if value remains under data-max, increase value by one when
            i++;                        // clicking the button
            btnOne.innerHTML = i;    // display that value in the button
        } else {
            btnOne.innerHTML = btnOne.dataset.min;  // else select data-min
        }
        selectedNr()
    }

    btnTwo.onclick = function () {
        i = parseInt(btnTwo.innerHTML);
        if (i < btnTwo.dataset.max) {
            i++;
            if (i < 10) {
               i = "0" + i;        // numbers 1-10 must have a leading 0
            }
            btnTwo.innerHTML = i;    // the rest stays the same
        } else {
            btnTwo.innerHTML = btnTwo.dataset.min;
        }
        selectedNr()
    }

    btnThree.onclick = function () {
        i = parseInt(btnThree.innerHTML);
        if (i < btnThree.dataset.max) {
            i++;
            if (i < 10) {
                i = "0" + i;        // numbers 1-10 must have a leading 0
            }
            btnThree.innerHTML = i;    // the rest stays the same
        } else {
            btnThree.innerHTML = btnThree.dataset.min;
        }
        selectedNr()
    }

    btnFour.onclick = function () {
        i = parseInt(btnFour.innerHTML);
        if (i < btnFour.dataset.max) {
            i++;
            if (i < 10) {
                i = "0" + i;        // numbers 1-10 must have a leading 0
            }
            btnFour.innerHTML = i;    // the rest stays the same
        } else {
            btnFour.innerHTML = btnFour.dataset.min;
        }
        selectedNr()
    }

    function selectedNr() {
        document.getElementById("target").innerHTML = "0" + btnOne.innerHTML + btnTwo.innerHTML + btnThree.innerHTML + btnFour.innerHTML;
    }       // this function makes the UI update with every click

})();
