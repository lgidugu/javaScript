var $tbody = document.querySelector("tbody");
//var $dateInput = document.querySelector("#dt");
//var $searchBtn = document.querySelector("#search");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
//$searchBtn.addEventListener("click", handleSearchButtonClick);


// Set filteredAddresses to addressData initially
var filteredData = dataSet;


// renderTable renders the filteredAddresses to the tbody
function renderTable() {  
  $tbody.innerHTML = "";
  var length = filteredData.length;
  for (var i = 0; i < length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];    
    var fields = Object.keys(data);    
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}
// Render the table for the first time on page load
renderTable();

$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#ufodata tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#ufodata').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
renderTable();
