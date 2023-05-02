const input = document.querySelector('input-search');
const btnCriar = document.querySelector('#cadastrar');
const btnPesquisar = document.querySelector('#pesquisar');
const btnAtualizar = document.querySelector('#atualizar');
const btnDeletar = document.querySelector('#deletar');

btnCriar.addEventListener('click', function () {

})

function exibicao() {
    fetch('http://localhost:8080/produtos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#table-produtos tbody');
            tableBody.innerHTML = '';
            data.forEach(produto => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.preco}</td>
                    <td>${produto.estoque}</td>
                `;
            });
        })
        .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', () => {
    exibicao();
});
// function cadastrar(){
//     fetch("http://localhost:8080/produtos")
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({
//             nome: document.getElementById("nome").value,
//     }
// }