async function loadDice() {
  var p1Dice = Math.floor(Math.random() * 6) + 1;
  var p2Dice = Math.floor(Math.random() * 6) + 1;

  document.querySelector("h1").textContent = "⏳ Rolling Dice ⏳";
  diceRoll();
  await sleep(2800);

  p1 = document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + p1Dice + ".png");
  p2 = document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + p2Dice + ".png");

  if (p1Dice > p2Dice) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
  } else if (p1Dice < p2Dice) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
  } else {
    document.querySelector("h1").textContent = "It's a Draw";
  }
}

async function diceRoll() {
  timer = 500;

  for (let i = 100; i < timer; i += 50) {
    randDice1 = Math.floor(Math.random() * 6) + 1;
    diceImgSrc1 = "images/dice" + randDice1 + ".png";

    randDice2 = Math.floor(Math.random() * 6) + 1;
    diceImgSrc2 = "images/dice" + randDice2 + ".png";

    document.querySelector(".img1").setAttribute("src", diceImgSrc1);
    document.querySelector(".img2").setAttribute("src", diceImgSrc2);

    await sleep(i);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

diceRoll();


