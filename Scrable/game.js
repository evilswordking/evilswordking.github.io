// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];
let selectedWord = "";
let gameOver = false;
let unscrambledCounter = 0;


function nextWord() {
  //Select a random word from the "words" array and assign it to a variable called "selectedWord";
  selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))].toLowerCase();

  //Scramble the selectedWord and display it inside of a div
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function check() {
  if (gameOver) { alert("Sorry the game is over. Refresh to play again."); return false; }

  if (selectedWord === document.getElementById("myWord").value.trim().toLowerCase()) {
    alert("YES!")
    document.getElementById("unscrambled").innerHTML += `<div>${selectedWord}</div>`;
    document.getElementById("myWord").value = "";
    unscrambledCounter++;
    nextWord();
  } else {
    alert("WRONG!");
    giveUp();
  }
}

function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  gameOver = true;
  alert("Game Over! You unscrambled " + unscrambledCounter + " words");
}

nextWord()