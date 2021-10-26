// Exemplo SIMPLIFICADO de como o DOM representa a hierarquia do HTML em sua memória (árvore lógica)

const obj = {
  node: "html",
  children: [
    {
      node: "body",
      children: [
        { node: "h1", children: [], parent: "body" },
        {
          node: "section",
          children: [
            { node: "p" },
            { node: "p" },
            { node: "p" },
            { node: "p" },
          ],
          parent: "body",
        },
        { node: "footer" },
      ],
      parent: "html",
    },
    { node: "head" },
  ],
  parent: null,
};
