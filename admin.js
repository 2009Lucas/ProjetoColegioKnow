const tableBody =
document.getElementById("table-body");

const search =
document.getElementById("search");

let students =
JSON.parse(localStorage.getItem("students")) || [];

function renderStudents(list){

  tableBody.innerHTML = "";

  list.forEach(student => {

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
    `;

    tableBody.appendChild(row);

  });

}

renderStudents(students);

search.addEventListener("input", () => {

  const filtered =
  students.filter(student =>
    student.name.toLowerCase()
    .includes(search.value.toLowerCase())
  );

  renderStudents(filtered);

});
document
.getElementById("clear")
.addEventListener("click", () => {

  localStorage.removeItem("students");

  location.reload();

});