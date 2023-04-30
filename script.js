function createTable() {
    //Write your code here
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
  cell1.innerHTML = "Row-0 Column-0";
  cell2.innerHTML = "Row-1 Column-1";
	cell3.innerHTML = "Row-2 Column-2";
	
}
