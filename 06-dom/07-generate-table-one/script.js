/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    var target = document.getElementById("target");
    var table = document.createElement("table");
    var totalRows = 10;
    var totalCols = 1;

    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");
        row.innerHTML = r;

        for (var c = 0; c < totalCols; c++) {
            var column = document.createElement("td");
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    target.appendChild(table);


})();

