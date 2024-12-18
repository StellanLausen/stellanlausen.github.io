let words = [
    {
        word: "indisch",
        hint: "mögen wir gerne"
    },
    {
        word: "lampe",
        hint: "soll ich dir unbedingt kaufen"
    },
    {
        word: "weihnachtsgeschenk",
        hint: "tust du dich schwer mit"
    },
    {
        word: "nallets",
        hint: "Wusstest du wirklich nicht warum ich den Hund so genannt habe?"
    },
    {
        word: "Zahl",
        hint: "rechne die Anzahl der letzten Fehler die du gefunden hast -2."
    },
    {
        word: "Zahl",
        hint: "was ist 50−(7÷7)×4"
    },
    {
        word: "vielleicht",
        hint: "hast du heute schon dein Code geöffnet"
    },
    {
        word: "spaghetti",
        hint: "schreibe ich gerne falsch"
    },
    {
        word: "nallets",
        hint: "Was ist Stellan rückwärts"
    },
]

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord;
let usedWords = [];

const initGame = () => {
    if(usedWords.length >= 9) {
        usedWords = [];
    }

    let randomNumber = Math.floor(Math.random() * words.length)
    console.log("before");
    console.log(usedWords);

    while(checkValInArr(randomNumber)){
        randomNumber = Math.floor(Math.random() * words.length)
    }

    console.log(checkValInArr(randomNumber))


    let randomObj = words[randomNumber];
    usedWords[usedWords.length] = randomNumber
    console.log("after ");
    console.log(usedWords);
    console.log("-----------");
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Gibst du bitter erstmal ein Wort ein!");

    if(userWord !== correctWord) return alert(`Oops! "${userWord}" das Wort habe ich aber nicht gemeint!`);

    alert(`Yippeee ${correctWord.toUpperCase()} ist das richtige Word!`);

    initGame();
}

function checkValInArr(val) {
    for(let i = 0; i < usedWords.length; i++){
        if(usedWords[i] === val){
            return true;
        }
    }
    return false;
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);