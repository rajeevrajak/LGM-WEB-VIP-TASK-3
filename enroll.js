var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["website"] = document.getElementById("website").value;
  formData["img"] = document.getElementById("img").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["skill"] = document.getElementById("skill").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.website;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.img;
  cell5 = newRow.insertCell(4);
  cell5.innerText = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerText = data.skill;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("website").value = selectedRow.cells[2].innerHTML;
  document.getElementById("img").value = selectedRow.cells[3].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[4].innerText;
  document.getElementById("skill").value = selectedRow.cells[5].innerText;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.website;
  selectedRow.cells[3].innerHTML = formData.img;
  selectedRow.cells[4].innerText = formData.gender;
  selectedRow.cells[5].innerText = formData.skill;

}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("img").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("skill").value = "";

  selectedRow = null;
}