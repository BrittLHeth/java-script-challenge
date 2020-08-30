// from data.js
var tableData = data;

// YOUR CODE HERE!
// data is a list of dictionaries. Missing duration in columns add later.

var ufotable = d3.select("tbody");

//console.log(data);

data.forEach(function(ufoData) {
    //console.log(ufoData);
    var row = ufotable.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
});

var  filterBtn = d3.select("#filter-btn")

var date = d3.select("#datetime")

