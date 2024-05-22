//1)- Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. 
//Listar os dados a cada inclusão. Ao clicar no botão Aprovados 
//2a Fase, ler o número de acertos para aprovação dos candidatos para a 2a fase do concurso. 
//O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. 
//Exibir os candidatos aprovados em ordem decrescente de número de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.


const btnAprovados = document.getElementById("btnAprovados");
const outAprovados = document.getElementById("outAprovados");
const outLista = document.getElementById("outLista");
const escolhaNumeroAcertos = [];
const notaDosCandidatos = [];
const digiteNome = [];
let escolhaNotaMinima;
let quantidadeCandidato;

do {
    escolhaNotaMinima = parseInt(prompt("Digite a nota minima de acertos que os candidatos precisam para passar: "))
    quantidadeCandidato = parseInt(prompt("Digite quantos candidatos iram participar: "))

    if (isNaN(quantidadeCandidato) || isNaN(escolhaNotaMinima)) {
        alert("Erro, por favor digite números");
    }

} while (isNaN(quantidadeCandidato) || isNaN(escolhaNotaMinima));

do {

    for (let i = 0; i < quantidadeCandidato; i++) {
        digiteNome[i] = String(prompt(`Digite o nome do candidato ${i}: `));
    }
    if(Number(digiteNome)) {
      alert("Erro, por favor digite letras.");
    }

    for (let i = 0; i < quantidadeCandidato; i++) {
        notaDosCandidatos[i] = Number(prompt(`Digite a nota do candidato ${i}: `));
    }

    function listarNomes() {
        if (String(digiteNome.length)) {
            let listarNomes = "Nomes:\n";
            digiteNome.forEach(nome => listarNomes += nome + "\n");
            outLista.textContent = listarNomes;
        } else {
            outLista.textContent = "Nenhum nome foi adicionado ainda.";
        }
    }

    function listarNotas() {
        if (notaDosCandidatos.length > 0) {
            let listarNotas = "Notas:\n";
            notaDosCandidatos.forEach(nota => listarNotas += nota + "\n");
            outLista.textContent = listarNotas;
        } else {
            outLista.textContent = "Nenhuma nota foi adicionado ainda.";
        }
    }

    function listarAprovados(listarNotas, escolhaNotaMinima) {
        let notasAprovadas =  listarNotas.filter(nota >= escolhaNotaMinima).sort((a, b) => b - a);
        let aprovados = "Aprovados: \n"; 
        notasAprovadas.forEach(nota => {
            aprovados += `Nota ${nota}: aprovado\n`
        })
        return aprovados
    }



    btnAprovados.addEventListener("click", function () {
        listarNomes();
        listarNotas();
        listarAprovados(listarNotas, escolhaNotaMinima);
    });

} while (Number(digiteNome));