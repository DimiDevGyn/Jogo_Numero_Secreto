let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1","Jogo do Número Secreto");
    exibirTextoNaTela("p","Escolha um Número entre 1 e 10");
}

exibirMensagemInicial();

//Adiconar Elementos na Lista .push
//let frutas = ["Uva", "Maçã", "Laranja"];
//futas.push("Morango");
//console.log(frutas); Saída: ["Uva", "Maçã", "Laranja", "Morango"];

//Para Remover o último Elemento .pop
//frutas.pop();
//console.log(frutas); Saída: ["Uva", "Maçã", "Laranja"];

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Acertou!");
        
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela("p", mensagemTentativas);

            document.getElementById("reiniciar").removeAttribute("disabled");

    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela ("p", "O Número Secreto é Menor");
        } else {
            exibirTextoNaTela ("p", "O Número Secreto é Maior");
        }

//tentativas = tentativas + 1;
tentativas++;

limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}