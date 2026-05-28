const questions = [
  {
    question: "O que mais te atrai?",
    A: "Resolver problemas com lógica",
    B: "Ajudar pessoas",
    C: "Organizar projetos"
  },

  {
    question: "Qual atividade você curte mais?",
    A: "Programar ou mexer no PC",
    B: "Trabalhar em equipe",
    C: "Planejar tarefas"
  },

  {
    question: "Qual seu estilo de trabalho?",
    A: "Criativo e autônomo",
    B: "Humano e colaborativo",
    C: "Estratégico e focado"
  },

  {
    question: "Onde você se imagina atuando?",
    A: "Empresa de tecnologia",
    B: "Hospital",
    C: "Empresa de gestão"
  },

  {
    question: "Qual matéria você prefere?",
    A: "Matemática",
    B: "Biologia",
    C: "Administração"
  }
];

let currentQuestion = 0;

let score = {
  A:0,
  B:0,
  C:0
};

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const progress = document.getElementById("progress");

startBtn.addEventListener("click", startQuiz);

function startQuiz(){
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
}

function loadQuestion(){

  const q = questions[currentQuestion];

  questionElement.innerText = q.question;

  answerButtons[0].innerText = q.A;
  answerButtons[1].innerText = q.B;
  answerButtons[2].innerText = q.C;

  progress.innerText =
  `Pergunta ${currentQuestion + 1} de ${questions.length}`;
}

answerButtons.forEach(button => {

  button.addEventListener("click", () => {

    const option = button.dataset.option;

    score[option]++;

    currentQuestion++;

    if(currentQuestion < questions.length){
      loadQuestion();
    } else {
      showResult();
    }

  });

});

function showResult(){

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let result = "";
  let course = "";

  if(score.A > score.B && score.A > score.C){

    result =
    "💻 Seu perfil é inovador, criativo e tecnológico.";

    course = "Técnico em Informática";

  }

  else if(score.B > score.A && score.B > score.C){

    result =
    "🩺 Seu perfil é humano, colaborativo e cuidadoso.";

    course = "Técnico em Enfermagem";

  }

  else{

    result =
    "📊 Seu perfil é estratégico, líder e organizado.";

    course = "Técnico em Administração";

  }

  document.getElementById("result-text").innerHTML = `
    ${result}

    <br><br>

    Curso recomendado:
    <strong>${course}</strong>

    <br><br>

    Faça sua matrícula no Colégio KNOW 🚀
  `;

  localStorage.setItem("ultimoResultadoQuiz", course);

}