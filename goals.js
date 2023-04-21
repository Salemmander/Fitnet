
function createCalendar(elem) {
    var today = new Date();
    let d = new Date(today.getFullYear(), today.getMonth());

    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

      // add spaces after last days of month for the last row
      // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
    }

      // close the table
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
}


const resultElement = document.getElementById("bmi-result");
resultElement.innerHTML = createCalendar(elem);