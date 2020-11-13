// Variables that are needed in the global scope

// temp wordlist, making a longer one in seperate file later
const wordList = [
  "kaffe",
  "te",
  "mjölk",
  "glögg",
  "vin",
  "läsk",
  "soda",
  "juice",
  "vatten",
];
// save the randomly generated word
let selectedWord = null;
// number of wrong guesses made
let wrongGuesses = 0;
// hangman image
let hangmanImg;
// DOM-node: where messages show up
let msgHolderEl = document.querySelector("#message");
// DOM-node: button to start game
let startGameBtnEl = document.querySelector("#startGameBtn");
// DOM-nodeList: letter buttons
let letterButtonEls = document.querySelectorAll("#letterButtons button");
// DOM-nodeList: letter boxes
let letterBoxEls = document.querySelectorAll("#letterBoxes li");
// DOM-node: letter box container
let letterBoxContainerEl = document.querySelector("#letterBoxes ul");

// call function pageInit when page loads
window.onload = pageInit;

// callback function with event listener for letter buttons
// that calls other functions
function pageInit() {
  for (const button of letterButtonEls) {
    button.addEventListener("click", letterButtonClickHandler);
    // other functions go here
  }
  setButtonsDisabled(true);
}

// callback function for clicking letter buttons
// sends the value of the letter button to doGuess()
function letterButtonClickHandler(event) {
  doGuess(event.target.value);
}

// function that is called when player guesses
function doGuess(letter) {
  if (isLetterInWord(letter).length > 0) {
    console.log('hej');
    // another if else to see where the letter are and if player won
  } else if (wrongGuesses <= 5) {
    // function för att disabla bokstavsknapp
    // function för att öka wrongGuesses ett steg
    // function för att ta fram nästa bild
  } else {

  }
}

// function to check if and where letter excist in selected word
// returns empty array if letter do not excist
function isLetterInWord(letter) {
  let letterIndices = [];
  for (let i = 0; i < selectedWord.length; i++) {
    if (letter == (selectedWord[i])) {
      letterIndices.push(i);
    }
  }
  return letterIndices;
}

// function for enabling and disabling all letter buttons
// isDisabled = boolean
function setButtonsDisabled(isDisabled) {
  for (let i = 0; i < letterButtonEls.length; i++) {
    letterButtonEls[i].disabled = isDisabled;
  }
}

// function for creating letter boxes
// for every letter in the selected word, loop through:
// create a new <li>-element containing a <input>
// use .appendChild() to add the new element to letterBoxEls
// then set letterBoxEls again so it's updated
function createLetterBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let newLiEl = document.createElement("LI");
    newLiEl.innerHTML = '<input type="text" disabled value="&nbsp;"/>';
    letterBoxContainerEl.appendChild(newLiEl);
  }
  letterBoxEls = document.querySelectorAll("#letterBoxes li");
}

// function to generate a random word
function generateRandomWord(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// event listener for start button
startGameBtnEl.addEventListener("click", startGame);

// callback function for start button event listener
function startGame() {
  setButtonsDisabled(false);
  letterBoxEls.forEach((el) => el.remove()); // delete old letter boxes
  selectedWord = generateRandomWord(wordList).toUpperCase();
  let selectedWordLength = selectedWord.length;
  createLetterBoxes(selectedWordLength);
}

// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
