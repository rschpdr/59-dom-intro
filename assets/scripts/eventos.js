// Eventos são consequências de uma ação do usuário na página: um clique, um aperto de tecla, ou passar o curso do mouse sobre algo. Todo evento acontece a partir de algum elemento HTML e pode ou não ser capturado por Event Listener.

// Quando adicionamos um listener no objeto document, estamos escutando este evento em TODA a janela do navegador
document.addEventListener("click", () => {
  console.log("Ocorreu um clique");
});

// Escutar clique no circulo roxo

circle.addEventListener("click", () => {
  console.log("Clicou na bola roxa");
});

// Escutar o clique no botão do Dropwdown

const btn = document.getElementById("dropdownMenuBtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

btn.addEventListener("click", () => {
  // Adicionar a classe 'show' no dropdown-menu
  dropdownMenu.classList.toggle("show");
});

// Contador de caracteres

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

// O evento keypress é disparado toda vez que o usuário aperta qualquer tecla do teclado
textInput.addEventListener("keyup", () => {
  // Para acessar o conteúdo digitado pelo usuário em um input, acessamos o atributo 'value'

  const value = textInput.value;

  charCount.innerText = value.length;
});
