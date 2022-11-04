// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary", "Combobreaker"];
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
  if (gameOver) { alert("You were Spooked!"); return false; }

  if (selectedWord === document.getElementById("myWord").value.trim().toLowerCase()) {
    alert("You found a word!")
    document.getElementById("unscrambled").innerHTML += `<div>${selectedWord}</div>`;
    document.getElementById("myWord").value = "";
    unscrambledCounter++;
    nextWord();
  } else {
    alert("Boo!");
    giveUp();
  }
}

function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  gameOver = true;
  alert("You were spooked! Your soup spelled " + unscrambledCounter + " words");
}

nextWord()