/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
    var totalRows = 11;
    var totalCols = 11;

    for (var r = 1; r < totalRows; r++) {
        var row = document.createElement("tr");
        row.innerHTML = r;

        for (var c = 1; c < totalCols; c++) {
            var column = document.createElement("td");
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    target.appendChild(table);

    var table2 = document.getElementsByTagName("table");
    for (let a = 0; a <= 10; a++) {

        for (let i = 0; i < 10; i++) {
            let b = table2[0].rows[i].cells;
            let c = i + 1;
            let d = a + 1;
            let e = c * d;
            b[a].innerHTML = e;

        }
    }

})();
