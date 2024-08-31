import { livros } from "./dados.js"

const body = document.querySelector("body")

let contador = 0

while(contador < livros.length) {
    body.innerHTML  += `
    <div>
        <h1>${livros[contador].titulo}</h1>
        <p>Autor: ${livros[contador].autor}</p>
        <p>Ano de Publicação: ${livros[contador].ano}</p>
        <p>Gênero: ${livros[contador].genero}</p>
        <p>Quantidade de Páginas: ${livros[contador].paginas}</p>
    </div>
    `

    contador++
}