/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // step 1: Get the value of the "data-image" attribute from the element with id "source"
    let source = document.getElementById("source").dataset.image;
    console.log(source);

    // step 2: Create a new image element inside the target element
    let y = document.createElement("img");

    // step 3: display the image referred to by the attribute value
    y.setAttribute("src", source);
    document.getElementById("target").appendChild(y)


})();
