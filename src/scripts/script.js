import { habilidadeRota } from "./rotas.js";

export function escolherPersonagem(personagens) {
    const personagemOne = personagens[Math.random() * personagens.length]
    const personagemTwo = personagens[Math.random() * personagens.length]

    while(personagemOne == personagemTwo){
        personagemTwo = personagens[Math.random() * personagens.length]
    }
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
}

export function calcularResultadoGanho(personagemOne, personagemTwo) {
    if(rota === "RETA" || rota === "CURVA"){
       if(personagemOne.pontos > personagemTwo.pontos) {
           console.log(`${personagemOne.nome} ganhou a rodada!`);
           personagemOne.pontos +=1
        } else if (personagemTwo.pontos > personagemOne.pontos) {
           console.log(`${personagemTwo.nome} ganhou a rodada!`);
           personagemTwo.pontos +=1
        } else {
            console.log("Empate!");
        }  
    } else {
        if(personagemOne.pontos < personagemTwo.pontos) {
           console.log(`${personagemOne.nome} perdeu um ponto`);
           personagemOne.pontos -=1
        } else if (personagemTwo.pontos < personagemOne.pontos) {
           console.log(`${personagemTwo.nome} perdeu um ponto!`);
           personagemTwo.pontos -=1
        } else {
            console.log("Empate!");
        }  
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
