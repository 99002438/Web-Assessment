var row = null

function readForm() {
    var form = {};
    form["name"] = document.getElementById("name").value;
    form["userCode"] = document.getElementById("userCode").value;
    form["usersalary"] = document.getElementById("usersalary").value;
    form["city"] = document.getElementById("city").value;
    return form;
}

function insertData(data) {
    var table = document.getElementById("UserList").getElementsByTagName('tbody')[0];
    var Row = table.insertRow(table.length);
    cell1 = Row.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = Row.insertCell(1);
    cell2.innerHTML = data.userCode;
    cell3 = Row.insertCell(2);
    cell3.innerHTML = data.usersalary;
    cell4 = Row.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = Row.insertCell(4);
    cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function onDelete(td) {
    if (confirm('Want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}


function updateRecord(form) {
    row.cells[0].innerHTML = form.name;
    row.cells[1].innerHTML = form.userCode;
    row.cells[2].innerHTML = form.usersalary;
    row.cells[3].innerHTML = form.city;
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
function onFormSubmit() {
    if (validate()) {
        var form = readForm();
        if (row == null)
            insertData(form);
        else
            updateRecord(form);
        
    }
}