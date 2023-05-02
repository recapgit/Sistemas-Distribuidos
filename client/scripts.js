const input = document.querySelector('input-search');
const btnCadastrar = document.querySelector('#cadastrar');
const btnPesquisar = document.querySelector('#pesquisar');
const btnAtualizar = document.querySelector('#atualizar');
const btnDeletar = document.querySelector('#deletar');
const popupContainer = document.querySelector('#popup-container');
const closeButton = document.querySelector('#close-form');
const salvarCadastro = document.querySelector('#salvar-cadastro');


salvarCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    cadastrarProduto();
    popupContainer.style.display = 'none';
    exibicao();
});

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    popupContainer.style.display = 'flex';
    popupContainer.classList.add('active');
    exibicao();
});


closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    exibicao();
})

function cadastrarProduto() {
    fetch('http://localhost:8080/produtos', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: document.getElementById("nome-produto").value,
            descricao: document.getElementById("descricao-produto").value,
            preco: document.getElementById("preco-produto").value,
            estoque: document.getElementById("estoque-produto").value
        })
    }).then(response => {
        if (response.status === 201) {
            console.log("Produto cadastrado com sucesso!");
            exibicao();
        } else {
            console.log("Erro ao cadastrar produto.");
        }
    })
        .catch(error => console.error(error));
}

// function pesquisarPorNome() {
//     const nome = document.getElementById('search-input').value;
//     fetch(`http://localhost:8080/produtos?nome=${nome}`)
//         .then(response => response.json())
//         .then(data => {
//             exibicao(data);
//         })
//         .catch(error => console.error(error));
// }

// function abrirPopupAtualizacao(id) {
//     fetch(`http://localhost:8080/produtos/${id}`)
//         .then(response => response.json())
//         .then(produto => {
//             document.getElementById("nome-produto-atualizar").value = produto.nome;
//             document.getElementById("descricao-produto-atualizar").value = produto.descricao;
//             document.getElementById("preco-produto-atualizar").value = produto.preco;
//             document.getElementById("estoque-produto-atualizar").value = produto.estoque;
//             document.getElementById("id-produto-atualizar").value = produto.id;

//             popupContainer.style.display = 'flex';
//             popupContainer.classList.add('active');
//         })
//         .catch(error => console.error(error));
// }

// function atualizarProduto() {
//     const id = document.getElementById("id-produto-atualizar").value;
//     fetch(`http://localhost:8080/produtos/${id}`, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "PUT",
//         body: JSON.stringify({
//             nome: document.getElementById("nome-produto-atualizar").value,
//             descricao: document.getElementById("descricao-produto-atualizar").value,
//             preco: document.getElementById("preco-produto-atualizar").value,
//             estoque: document.getElementById("estoque-produto-atualizar").value
//         })
//     }).then(response => {
//         if (response.ok) {
//             console.log("Produto atualizado com sucesso!");
//             popupContainer.style.display = 'none';
//             exibicao();
//         } else {
//             console.log("Erro ao atualizar produto.");
//         }
//     })
//         .catch(error => console.error(error));
// }

function deletarProduto(id) {
    if (confirm("Deseja realmente excluir o produto?")) {
        fetch(`http://localhost:8080/produtos/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Não foi possível excluir o produto.");
                }
                alert("Produto excluído com sucesso.");
                exibicao();
            })
            .catch(error => console.error(error));
    }
}

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
                    <td>
                        <button id="btnDeletar" class= "btnTabela" onclick="deletarProduto(${produto.id})">
                            <img src="assets\\delete.png" alt="Deletar">
                        </button>
                    </td>
                `;
            });
        })
        .catch(error => console.error(error));
}
// document.getElementById('pesquisar').addEventListener('click', pesquisarPorNome())

document.addEventListener('DOMContentLoaded', () => {
    exibicao();
});


{/* <button id="btnAtualizar${produto.id}" class="btnTabela" onclick="abrirPopupAtualizacao(${produto.id})">
                            <img src="assets\\atualizar.png" alt="Atualizar">
                        </button> */}