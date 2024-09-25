function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}
const elName1 = getElement(".name1");
const elName2 = getElement(".name2");
const elFinish = getElement(".finish");
let elGamerName1 = getElement(".gamer1_name");
let elGamerName2 = getElement(".gamer2_name");
const elGamerName = getElement(".gamer1_name");
let elScore1 = getElement(".gamer1_bal");
let elScore2 = getElement(".gamer2_bal");
let ElRandom1 = getElement(".game1");
let ElRandom2 = document.querySelector(".game2");
let Elbtn1 = getElement(".btn1");
let Elbtn2 = getElement(".btn2");
let elGame1 = getElement("game_1");
let elGame2 = getElement("game_2");
let elWin = getElement(".win");
let score1 = 0;
let score2 = 0;
function dataSave() {
  elGamerName1.textContent = elName1.value;
  elGamerName2.textContent = elName2.value;
}
let count = 1;

Elbtn1.addEventListener("click", function () {
  let number1 = Math.floor(Math.random() * 10);
  ElRandom1.textContent = number1;
  score1 += number1;
  elScore1.textContent = score1;
});

count++;

if (count % 2 === 0) {
  Elbtn2.addEventListener("click", function () {
    let number2 = Math.floor(Math.random() * 10);
    ElRandom2.textContent = number2;
    score2 += number2;
    elScore2.textContent = score2;
  });

  count++;
}

if (score1 > 100) {
  elWin.textContentt = elName1.value;
  score1 = 0;
}
