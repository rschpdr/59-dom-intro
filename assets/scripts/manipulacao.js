// Depois de selecionar um elemento, o DOM nos permite modificá-lo via javascript. Podemos modificar qualquer coisa: estilos, conteúdo interno, até mesmo posição na página

const mainH1 = document.getElementById("mainTitle");

// Trocar a cor do título depois de 3 segundos
setTimeout(() => {
  mainH1.classList.replace("red-text", "blue-text");
}, 3000);

// A cada 1 segundo, trocar a cor do título de acordo com a array

const colors = ["red", "blue", "green", "purple", "yellow", "orange", "pink"];
let count = 0;

setInterval(() => {
  mainH1.style.color = colors[count % colors.length]; // O módulo serve para "resetar" o contador pra 0 quando o mesmo é múltiplo de 7 (tamanho da array)

  count++;
}, 500);

// Efeito de aparecimento atrasado das palavras em um parágrafo

const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur,",
  "adipisicing",
  "elit.",
  "Molestias",
  "dolorum",
  "excepturi",
  "earum",
  "quam",
  "ratione",
  "at.",
];
let wordCount = 0;

const secondParagraph = document.getElementById("secondLorem");

const intervalId = setInterval(() => {
  secondParagraph.innerHTML += words[wordCount] + " ";

  wordCount++;

  // Parando o intervalo de repetição quando o contador chega no final da array
  if (wordCount === words.length) {
    clearInterval(intervalId);
  }
}, 100);

// Aumentar o círculo a cada 1 segundo até um tamanho, depois diminui

const circle = document.querySelector(".purple-circle");

let sizeCount = 110;
let currentAction = "grow";

const intervalId2 = setInterval(() => {
  circle.style.transform = `scale(${sizeCount / 100})`;

  if (currentAction === "grow") {
    sizeCount += 10;
  } else if (currentAction === "shrink") {
    sizeCount -= 10;
  }

  if (sizeCount > 200) {
    currentAction = "shrink";
  }

  if (sizeCount < 110) {
    currentAction = "grow";
  }
}, 1000);
