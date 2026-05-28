const form = document.getElementById("lead-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  if(!name || !age || !email || !course){

    alert("Preencha todos os campos.");
    return;

  }

  const emailValid =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailValid.test(email)){

    alert("Digite um e-mail válido.");
    return;

  }

  const student = {
    name,
    age,
    email,
    course
  };

  let students =
  JSON.parse(localStorage.getItem("students")) || [];

  students.push(student);

  localStorage.setItem(
    "students",
    JSON.stringify(students)
  );

  alert("Cadastro realizado!");

  form.reset();

});