// Function to create a multiplication table based on user input
function createTable(event) {
  // Retrieve input values for minimum and maximum rows and columns
  let minrow = parseInt(document.getElementById("minrow").value);
  let maxrow = parseInt(document.getElementById("maxrow").value);
  let mincolumn = parseInt(document.getElementById("mincolumn").value);
  let maxcolumn = parseInt(document.getElementById("maxcolumn").value);

  // Calculate the number of rows and columns
  var column = maxcolumn - mincolumn;
  var row = maxrow - minrow;

  // Log input values and calculated rows/columns for debugging
  console.log("Min Row:", minrow);
  console.log("Max Row:", maxrow);
  console.log("Calculated Row:", row);
  console.log("Min Column:", mincolumn);
  console.log("Max Column:", maxcolumn);
  console.log("Calculated Column:", column);

  // Validate input values for rows
  if (minrow > maxrow || minrow < -50 || maxrow > 50 || isNaN(row)) {
    document.querySelector(".rowerror").innerHTML =
      "Enter a value between -50 and 50. The minimum value should be less than or equal to the maximum.";
    event.preventDefault();
    return false;
  }
  document.querySelector(".rowerror").innerHTML = "";

  // Validate input values for columns
  if (mincolumn > maxcolumn || mincolumn < -50 || maxcolumn > 50 || isNaN(column)) {
    document.querySelector(".colerror").innerHTML =
      "Enter a value between -50 and 50. The minimum value should be less than or equal to the maximum.";
    event.preventDefault();
    return false;
  }
  document.querySelector(".colerror").innerHTML = "";

  // Initialize the HTML variable for constructing the table
  var html = "<thead><tr><th></th>";

  // Generate table header with row values
  for (var x = minrow; x <= maxrow; x++) {
    html += "<th>" + x + "</th>";
  }
  html += "</tr></thead><tbody> ";

  // Generate table body with multiplication values
  for (var x = mincolumn; x <= maxcolumn; x++) {
    html += "<tr><th>" + x + "</td>";

    for (var y = minrow; y <= maxrow; y++) {
      html += "<td>" + x * y + "</td>";
      // Log multiplication values for each cell
      console.log("data: " + x * y);
    }

    html += "</tr>";
  }
  html += "</tbody>";

  // Log the generated HTML and the target element for debugging
  console.log("Generated HTML:", html);
  console.log("Target Element:", document.getElementById("mult_table"));

  // Set the innerHTML of the target element to the generated HTML
  document.getElementById("mult_table").innerHTML = html;
}

//Sources used: class lectures/slides, W3Schools, graphicmama.com for color palette, previous self-learning