    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("email") && urlParams.has("password")) {
        console.log("Query parameters found");
        const email = urlParams.get("email");
        const password = urlParams.get("password");
        const address = urlParams.get("address");
        const city = urlParams.get("city");
        const state = urlParams.get("state"); 

        const userInfo = {
            "Email": email,
            "Password": password,
            "Address": address,
            "City": city,
            "State":state,

        };



        displayUserInfo(userInfo);
    }


    function displayUserInfo(userInfo) {
        console.log("Displaying user information");
        const tableBody = document.getElementById("table-body");

        for (const key in userInfo) {
            const row = document.createElement("tr");
    
            const infoCell = document.createElement("td");
            infoCell.textContent = key;
    
            const valueCell = document.createElement("td");
            valueCell.textContent = userInfo[key];
    
            row.appendChild(infoCell);
            row.appendChild(valueCell);
    
            tableBody.appendChild(row);
        }
    }