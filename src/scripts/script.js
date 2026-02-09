import { habilidadeRota } from "./rotas.js";

export function escolherPersonagem() {

}

export function rolarDado() {
    return Math.floor(Math.random() * 1) + 1;
}

export function calcularResultadoPontos(personagem, rota) {
    const habilidade = habilidadeRota(rota);
    const valorHabilidade = personagem[habilidade];
    const valorDado = rolarDado();
    const resultado = valorHabilidade + valorDado;

    console.log(`Personagem: ${personagem.nome}`);
    console.log(`Resultado = ${valorHabilidade} + ${valorDado} = ${resultado}`);

    personagem.pontos += resultado;
}

export function calcularResultadoGanho(personagemOne, personagemTwo) {
    if(personagemOne.pontos > personagemTwo.pontos) {
        console.log(`${personagemOne.nome} ganhou a rodada!`);
    } else if (personagemTwo.pontos > personagemOne.pontos) {
        console.log(`${personagemTwo.nome} ganhou a rodada!`);
    } else {
        console.log("Empate!");
    }
}

export function verificarEliminacao(personagemOne, personagemTwo) {
    if(personagemOne.pontos <= 0){
        console.log(`${personagemOne.nome} foi eliminado!`);
        return true;
    } else if (personagemTwo.pontos <= 0) {
        console.log(`${personagemTwo.nome} foi eliminado!`);
        return true;
    }

}