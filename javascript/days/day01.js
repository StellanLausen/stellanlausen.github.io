const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord;
const presentCode = 2495;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
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
    if(!userWord) return alert("Sachmal!? Gib erstmal ein Wort ein!");


    if(userWord !== correctWord) return alert(`Oops! "${userWord}" das Wort habe ich aber nicht gemeint!`);


    alert(`Yippeee ${correctWord.toUpperCase()} ist das korrekte Word!`);

    initGame();
}

const giveCode = () => {

}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);