/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
            let target = document.getElementById("target");
            for (let i = 0; i < data.length; i++) {
                let tplate = document.getElementById("tpl-hero").content.cloneNode(true);//this is to get the X-Men list from HTML file
                tplate.querySelector('.name').innerHTML = data[i].name;
                tplate.querySelector('.alter-ego').innerHTML = data[i].alterEgo;
                tplate.querySelector('.powers').innerHTML = data[i].abilities;
                target.appendChild(tplate);
                console.log(data);

            }
        }
    })
})();
