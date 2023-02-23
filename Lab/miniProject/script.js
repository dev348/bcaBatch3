const form = document.getElementById("myForm");
const dataTable = document.getElementById("dataTable");

if(form){
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const dobInput = document.getElementById("dob");
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const dob = dobInput.value;
        
        if (name === "" || email === "" || dob === "") {
          alert("Please fill out all fields.");
          return;
        }

        let numRows = dataTable.rows.length;

        
        const newRow = dataTable.insertRow(numRows);
        const siCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const emailCell = newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        
        siCell.innerHTML = numRows
        nameCell.innerText = name;
        emailCell.innerText = email;
        dobCell.innerText = dob;
        
        form.reset();
      });
}