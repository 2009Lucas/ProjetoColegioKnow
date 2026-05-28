const perguntas = [
    {
        pergunta: "O que mais te atrai?",
        A: "Resolver problemas com lógica",
        B: "Ajudar pessoas",
        C: "Organizar projetos"
    },
    {
        pergunta: "Qual atividade você curte mais?",
        A: "Programar ou mexer no PC",
        B: "Trabalhar em equipe",
        C: "Planejar tarefas ou liderar"
    },
    {
        pergunta: "Qual seu estilo de trabalho?",
        A: "Autônomo e criativo",
        B: "Colaborativo e humano",
        C: "Focado e estratégico"
    },
    {
        pergunta: "Onde você se imagina atuando?",
        A: "Empresa de tecnologia",
        B: "Hospital ou unidade de saúde",
        C: "Escritório ou empresa"
    },
    {
        pergunta: "Qual matéria você prefere?",
        A: "Informática",
        B: "Biologia",
        C: "Administração"
    },
    {
        pergunta: "Você gosta de:",
        A: "Criar sistemas",
        B: "Cuidar das pessoas",
        C: "Gerenciar equipes"
    },
    {
        pergunta: "Qual ambiente você prefere?",
        A: "Laboratório de tecnologia",
        B: "Clínica ou hospital",
        C: "Empresa corporativa"
    },
    {
        pergunta: "Qual habilidade combina mais com você?",
        A: "Raciocínio lógico",
        B: "Empatia",
        C: "Liderança"
    },
    {
        pergunta: "O que parece mais interessante?",
        A: "Desenvolver aplicativos",
        B: "Atendimento ao paciente",
        C: "Planejamento financeiro"
    },
    {
        pergunta: "Como seus amigos te definem?",
        A: "Criativo",
        B: "Prestativo",
        C: "Organizado"
    },
    {
        pergunta: "Qual dessas áreas chama mais atenção?",
        A: "Inteligência Artificial",
        B: "Saúde e bem-estar",
        C: "Empreendedorismo"
    },
    {
        pergunta: "Qual desafio você escolheria?",
        A: "Criar um site",
        B: "Salvar vidas",
        C: "Administrar uma empresa"
    },
    {
        pergunta: "Você prefere:",
        A: "Tecnologia",
        B: "Cuidado humano",
        C: "Negócios"
    },
    {
        pergunta: "Qual destas profissões parece mais interessante?",
        A: "Programador",
        B: "Enfermeiro",
        C: "Administrador"
    },
    {
        pergunta: "O que te motiva mais?",
        A: "Inovação",
        B: "Ajudar pessoas",
        C: "Resultados"
    }
];

let perguntaAtual = 0;

let pontos = {
    A: 0,
    B: 0,
    C: 0
};

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const perguntaElemento = document.getElementById("pergunta");
const alternativas = document.querySelectorAll(".alternativa");
const contador = document.getElementById("contador");

document
    .getElementById("btnIniciar")
    .addEventListener("click", iniciarQuiz);

alternativas.forEach((botao) => {
    botao.addEventListener("click", () => {
        const resposta = botao.dataset.resposta;

        pontos[resposta]++;
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    });
});

function iniciarQuiz() {
    inicio.classList.add("oculto");
    quiz.classList.remove("oculto");

    carregarPergunta();
}

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    alternativas[0].textContent = pergunta.A;
    alternativas[1].textContent = pergunta.B;
    alternativas[2].textContent = pergunta.C;

    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

function mostrarResultado() {
    quiz.classList.add("oculto");
    resultado.classList.remove("oculto");

    let curso = "";
    let mensagem = "";

    if (pontos.A > pontos.B && pontos.A > pontos.C) {

        curso = "Técnico em Informática 💻";

        mensagem =
            "Você possui perfil inovador, lógico e criativo. " +
            "O curso de Informática do Colégio KNOW é perfeito " +
            "para desenvolver seu futuro na tecnologia.";

    } else if (pontos.B > pontos.A && pontos.B > pontos.C) {

        curso = "Técnico em Enfermagem 🩺";

        mensagem =
            "Você demonstra empatia, cuidado e espírito colaborativo. " +
            "A área da saúde combina muito com o seu perfil.";

    } else {

        curso = "Técnico em Administração 📊";

        mensagem =
            "Você apresenta liderança, organização e visão estratégica. " +
            "Administração pode ser o caminho ideal para sua carreira.";
    }

    document.getElementById("cursoResultado").textContent = curso;

    document.getElementById("textoResultado").textContent = mensagem;

    localStorage.setItem("resultadoQuizKnow", curso);
}

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = {
        A: 0,
        B: 0,
        C: 0
    };

    resultado.classList.add("oculto");
    inicio.classList.remove("oculto");
}