
let questions = [
    {
        question: "Was war meine Lieblingsfarbe als ich klein war?",
        answer: "Lila"
    },
    {
        question: "Wie heißt meine Stiefmutter mit Vornamen?",
        answer: "Ranka"
    },
    {
        question: "Mit wem gehe ich fast jeden Dienstag und Donnerstag klettern?",
        answer: "Jens"
    },
    {
        question: "Wie ist der Zweitname von Thalia?",
        answer: "Soraya"
    },
    {
        question: "Welches Instrument habe ich mal gespielt?",
        answer: "Schlagzeug"
    },
    {
        question: "Was ist mein Lieblingsessen (Von meiner Oma Inge)?",
        answer: "Gulasch"
    },
    {
        question: "Kann ich einen Rückwärtssalto?",
        answer: "Nein"
    },
    {
        question: "Wie ist der Zweitname von Jasmina?",
        answer: "Laurine"
    },
    {
        question: "Gehen mit langsam die Ideen für Fragen aus und ich brauche noch mehr für andere Tage?",
        answer: "Ja"
    },
    {
        question: "Wusstest du, dass Luftfeuchtigkeit bei 100% nicht gleich Wasser ist ?",
        answer: "Nein"
    },
]


const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");
    answerBtn = document.querySelector(".get-answer");

let correctWord;
let codeRuns = 0;
const presentCode = "5061";
let iterateQuestions = questions.length;

const initGame = () => {
    let randomObj;

    if(iterateQuestions < questions.length){
        iterateQuestions++;
    } else {
        iterateQuestions = 0;
    }

    randomObj = questions[iterateQuestions];
    console.log(randomObj.question);

    wordText.innerText = randomObj.question;
    correctWord = randomObj.answer.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {

    if(codeRuns < 4){
        codeRuns++;
    } else {
        codeRuns = 1;
    }

    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Gibst du erstmal ein Wort ein bitte!");


    if(userWord !== correctWord) return alert(`Oops! "${userWord}" falsche Antwort!`);

    console.log(presentCode.charAt(codeRuns - 1))
    alert(`Yippeee ${correctWord.toUpperCase()}  das war richtig! Ein Teil von deinem Code ist ${presentCode.charAt(codeRuns - 1)}`);

    initGame();
}
const getAnswer = () =>
{
    alert(correctWord + 'hättest du wissen können!');
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
answerBtn.addEventListener("click", getAnswer);