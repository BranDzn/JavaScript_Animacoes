"use strict";

const linha = Number(window.prompt('Digite quantas linhas você deseja que a tabela tenha: '));
const colunas = Number(window.prompt('Digite quantas colunas você deseja que a tabela tenha: '));
const tabela = window.document.querySelector('#tabela');
let contador_linha = 1;
let contador_coluna;
tabela.innerHTML += `<tr id="tabelaLinha${contador_linha}">`;
tabela.innerHTML += `</tr>`;

while(contador_linha <= linha){
    tabela.innerHTML += `<tr id="tabelaLinha${contador_linha}">`;
    tabela.innerHTML += `</tr>`;
    contador_coluna = 1;
    const newTabela = window.document.querySelector(`#tabelaLinha${contador_linha}`);
    while(contador_coluna <= colunas){
        if(contador_coluna % 2 == 0){
            newTabela.innerHTML += `<td class="celulaVerde">${contador_linha}, ${contador_coluna}</td>`;
        }
        else{
            newTabela.innerHTML += `<td class="celulaAmarela">${contador_linha}, ${contador_coluna}</td>`;
        }
        contador_coluna++;
    }
    contador_linha++;
}
