const matrix = document.createElement('div');       // Cria uma div
matrix.classList.add("matrix");     // Adiciona a classe matrix à div matrix
document.body.appendChild(matrix);  // Adiciona a div matrix ao corpo do documento

const linhas = 10; // Ajuste o número de linhas
const colunas = 150; // Ajuste o número de colunas

function gerarCascata() {   // Função para gerar a cascata de números aleatórios//
    let cascata = "";       // Inicializa a variável cascata
    for (let i = 0; i < linhas; i++) {      // Loop para criar as linhas
        for (let j = 0; j < colunas; j++) {     // Loop para criar as colunas
            cascata += Math.round(Math.random());       // Adiciona um número aleatório (0 ou 1) à cascata
        }
        cascata += "\n"; // Adiciona uma quebra de linha após cada linha
    }
    return cascata;     // Retorna a cascata gerada
}

function atualizarCascata() {       // Função para atualizar a cascata
    matrix.textContent = gerarCascata();    // Atualiza o conteúdo da div matrix com a cascata gerada
}

setInterval(atualizarCascata, 100); // Atualiza a cada 100ms