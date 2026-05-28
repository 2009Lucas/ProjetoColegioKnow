const button = document.getElementById("scratch-btn");
const prizeBox = document.getElementById("prize-box");
const prizeText = document.getElementById("prize");

const prizes = [
  "🎽 Camiseta personalizada",
  "🖊️ Caneta exclusiva",
  "🎟️ Entrada gratuita em evento",
  "📚 Kit estudante",
  "💸 10% de desconto na matrícula"
];

button.addEventListener("click", () => {

  const played = localStorage.getItem("raspadinha");

  if(played){
    alert("Você já participou hoje!");
    return;
  }

  const randomPrize =
  prizes[Math.floor(Math.random() * prizes.length)];

  prizeBox.classList.remove("hidden");

  prizeText.innerText = randomPrize;

  localStorage.setItem("raspadinha", "true");

});