var $board = document.getElementById('board');
var $table = document.createElement('table');

var arr = [
    ['',1, 2, 3, 4, 5, 6, 7, 8,''],
    [' ','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',' ']
]




for (var i = 0; i < 10; i++) {
    var $row = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
        var $cell = document.createElement('td');
        if (i%2 == j%2) {
            $cell.className = "white";
            $cell.textContent = arr[0][i] + '' + arr[1][j];
        } else {
            $cell.className = "black";
            $cell.textContent = arr[0][i] + '' + arr[1][j];
        }
        $row.appendChild($cell);
    }
    $table.appendChild($row);
}
$board.appendChild($table);