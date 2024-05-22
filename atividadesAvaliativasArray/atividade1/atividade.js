/*//! etapa 1:  Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato.{
    O programa deve conter três funções{
        para: 1) validar o preenchimento,
        adicionar um clube ao vetor e listar os clubes; 2) 
        listar os clubes (se houver); 3) 
        montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante.
    }
    */
   
//! Etapa 2: Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar. 

const TabelaCampeonato = [];
const btnTabela = document.getElementById("btnTabela");
const outLista = document.getElementById("outLista");
const outTabela = document.getElementById("outTabela");
let escolhaNumero;

do {
    escolhaNumero = parseInt(prompt("Digite um número par de 2 à 10: "));

    if (isNaN(escolhaNumero)) {
        alert("Erro, por favor digite números");
    } else if (escolhaNumero % 2 !== 0) {
        alert("Erro, por favor digite um valor par");
    } else if (escolhaNumero > 10 || escolhaNumero < 2) {
        alert("Erro, por favor digite um valor de no mínimo 2 a no máximo 10");
    }

} while (isNaN(escolhaNumero) || escolhaNumero % 2 !== 0 || escolhaNumero > 10 || escolhaNumero < 2);

document.write("Você escolheu essa quantidade de times: " + escolhaNumero);

for (let i = 0; i < escolhaNumero; i++) {
    TabelaCampeonato[i] = prompt("Digite nomes de times para o campeonato: ");
}

function listarClubes() {
    if (TabelaCampeonato.length > 0) {
        let listaClubes = "Clubes no campeonato:\n";
        TabelaCampeonato.forEach(clube => listaClubes += clube + "\n");
        outLista.textContent = listaClubes;
    } else {
        outLista.textContent = "Nenhum clube foi adicionado ainda.";
    }
}

function montarTabelaJogos() {
    if (TabelaCampeonato.length % 2 !== 0) {
        alert("Número de clubes é ímpar, não é possível listar a tabela de jogos.");
        return;
    }
    let tabelaJogos = "Tabela de Jogos:\n";
    for (let i = 0; i < TabelaCampeonato.length / 2; i++) {
        tabelaJogos += TabelaCampeonato[i] + " x " + TabelaCampeonato[TabelaCampeonato.length - 1 - i] + "\n";
    }
    outTabela.textContent = tabelaJogos;
}

btnTabela.addEventListener("click", function () {
    listarClubes();
    montarTabelaJogos();
});
