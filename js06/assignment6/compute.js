document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tableBody = document.querySelector("#table-body");
  
    // Check if there are query parameters in the URL
    if (urlParams.has("num1") && urlParams.has("num2")) {
        const num1 = parseFloat(urlParams.get("num1"));
        const num2 = parseFloat(urlParams.get("num2"));
  
        if (!isNaN(num1) && !isNaN(num2)) {
            // Perform arithmetic operations
            const results = {
                "Addition": num1 + num2,
                "Subtraction": num1 - num2,
                "Multiplication": num1 * num2,
                "Division": num1 / num2
            };
  
            // Display results in the table
            displayResults(results);
        } else {
            console.error("Invalid input. Please enter valid numbers.");
        }
    } else {
        console.error("Numbers not found in query parameters!");
    }
  
    // Function to display results in the table
    function displayResults(results) {
        for (const operation in results) {
            const row = document.createElement("tr");
  
            const operationCell = document.createElement("td");
            operationCell.textContent = operation;
  
            const resultCell = document.createElement("td");
            resultCell.textContent = results[operation];
  
            row.appendChild(operationCell);
            row.appendChild(resultCell);
  
            tableBody.appendChild(row);
        }
    }
  });