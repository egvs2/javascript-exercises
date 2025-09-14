let questions = [
    {
        category: "Português",
        question: "O que é um fonema?",
        choices: ["A menor unidade sonora da linguagem", "Um tipo de poema", "Uma figura de linguagem"],
        answer: "A menor unidade sonora da linguagem"
    },
    {
        category: "Matematica",
        question: "Qual é a raiz quadrada de 144?",
        choices: ["12", "14", "16"],
        answer: "12"
    },
    {
        category: "Física",
        question: "Qual é a fórmula da Segunda Lei de Newton?",
        choices: ["F = m × a", "E = m × c²", "V = d / t"],
        answer: "F = m × a"
    },
    {
        category: "Quimica",
        question: "Qual é o símbolo químico do oxigênio?",
        choices: ["O", "Ox", "Og"],
        answer: "O"
    },
    {
        category: "Geografia",
        question: "Qual é a capital do Brasil?",
        choices: ["Rio de Janeiro", "São Paulo", "Brasília"],
        answer: "Brasília"
    }
];


function getRandomQuestion(perguntas){
    let tamanho = perguntas.length;

    let indice = Math.floor(Math.random()*tamanho);

    return perguntas[indice];
}

function getRandomComputerChoice(opcoes){
    let tamanho = opcoes.length;

    let indice = Math.floor(Math.random()*tamanho);

    return opcoes[indice];
}

function getResults(questao, resposta){
    if(questao.answer === resposta){
        return "The computer's choice is correct!";
    }else{
        return `The computer's choice is wrong. The correct answer is: ${questao.answer}`
    }

}

