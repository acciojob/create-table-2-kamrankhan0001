function createTable() {
//We use the parseInt() function to convert the user input 
//into integers, which we store in the rows and cols variables.
const rows = parseInt(prompt('Input number of rows'));
const cols = parseInt(prompt('Input number of columns'));
const table = document.getElementById('myTable');

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }	
}
