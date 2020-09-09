/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run")
    run.addEventListener("click", function () {
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => appendData(data))

        function appendData(data) {
            let xName = document.getElementById("hero-name").value;
            let xAltEgo = document.getElementById("hero-alter-ego").value;
            let xPowers = document.getElementById("hero-powers").value;
            let id = data.length + 1; // we do +1 to increase id number
            data[data.length] = {
                id: id,
                name: xName,
                alterEgo: xAltEgo,
                abilities: xPowers,
            };
            console.log(data);
        }
    });

})();
