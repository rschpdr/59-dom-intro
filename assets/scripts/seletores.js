// Pelo DOM, podemos selecionar tags do HTML para manipulá-las pelo Javascript

// Selecionar por id da tag

// 'document' é um objeto global do javascript, ou seja, sempre está disponível em qualquer escopo
// O getElementById retorna um objeto do tipo Element
const h1 = document.getElementById("mainTitle");

console.log(h1);

// Selecionar por nome de tag

// Note o nome do método: getElement"S"ByTagName, ou seja, esse método retorna uma coleção de elementos, todos os elementos desse tipo na página.

// Esse método retorna uma HTMLCollection, que NÃO é uma array. Para percorrermos essa estrutura, precisamos primeiro convertê-la para array, ou usarmos o 'for'
const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// Selecionar por nome de classe

// OBS.: nesse método NÃO é necessário prefixar a classe com "."
// Esse método também retorna uma HTMLCollection
const redTexts = document.getElementsByClassName("red-text");

console.log(redTexts);

// Selecionar UM elemento usando a sintaxe de seletores do CSS

// IMPORTANTE: O querySelector retorna somente a PRIMEIRA ocorrência do elemento na página (pesquisando de cima pra baixo)
const lastItem = document.querySelector("ul li:last-child");

console.log(lastItem);

// Podemos pesquisar também por classe e id usando o query selector

const redText = document.querySelector(".red-text");
const mainTitle = document.querySelector("#mainTitle");

console.log(redText);
console.log(mainTitle);

// Selecionar TODOS os elementos usando a sintaxe do CSS
// ATENÇÃO: esse método retorna uma NodeList, que é diferente do HTMLCollection
const lastListItems = document.querySelectorAll("ul li:last-child");

console.log(lastListItems);
