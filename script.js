let currentQuestion = 0;
const questions = [
    "Qual foi o momento mais feliz da sua vida recentemente?",
    "O que você mais gosta de fazer no seu tempo livre?",
    "Qual é a sua maior paixão ou hobby?",
    "Qual foi a última coisa que te fez sorrir de verdade?",
    "O que você mais valoriza em uma amizade?",
    "Qual foi o maior desafio que você superou na sua vida?",
    "O que você mais se orgulha de ter conquistado até agora?",
    "Como você descreveria suas maiores qualidades?",
    "Qual foi o momento em que você se sentiu mais realizado?",
    "Quem são as pessoas que mais te inspiram e por quê?",
    "Como você gostaria de ser lembrado pelas pessoas?",
    "Qual é o seu maior talento e como você o desenvolveu?",
    "O que você acredita que te diferencia dos outros?",
    "Qual foi o feedback mais positivo que você já recebeu?",
    "Como você lida com os momentos de sucesso e reconhecimento?"
];

const answers = [];

function nextQuestion() {
    const answerElement = document.getElementById('answer');
    answers.push(answerElement.value);
    answerElement.value = '';

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestion];
    currentQuestion++;
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h3>Obrigado por responder!</h3><button onclick="generatePDF()">Baixar PDF</button>`;
}

function submitAnswers() {
    const name = document.getElementById('name').value;
    const email = prompt("Por favor, insira seu email:");
    // Aqui você pode adicionar a lógica para enviar as respostas por email
    alert(`Respostas enviadas para ${email}`);
}

function generatePDF() {
    const doc = new jsPDF();
    const name = document.getElementById('name').value;
    doc.text(`Respostas do Questionário - ${name}`, 10, 10);
    answers.forEach((answer, index) => {
        doc.text(`${index + 1}. ${questions[index]}`, 10, 20 + (index * 10));
        doc.text(`Resposta: ${answer}`, 10, 30 + (index * 10));
    });
    doc.save('respostas.pdf');
}

// Inicializa a primeira pergunta
displayQuestion();