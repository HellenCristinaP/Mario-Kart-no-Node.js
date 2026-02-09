import { habilidadeRota } from "./rotas.js";

export function rolarDado() {
    return Math.floor(Math.random() * 1) + 1;
}

export function calcularResultadoPontos(personagensEscolhidos, rota) {
    personagensEscolhidos.forEach((personagem) => {
        const habilidade = habilidadeRota(rota);
        const valorHabilidade = personagem[`${habilidade}`];
        const valorDado = rolarDado();
        const resultado = valorHabilidade + valorDado;

        console.log(`Personagem: ${personagem.nome}`);
        console.log(`Resultado = ${valorHabilidade} + ${valorDado} = ${resultado}`); 
    })
    
    calcularResultadoGanho(personagensEscolhidos, rota)
}

function calcularResultadoGanho(personagensEscolhidos, rota) {
    const personagemOne = personagensEscolhidos[0]
    const personagemTwo = personagensEscolhidos[1]
        
    // if(rota === "RETA" || rota === "CURVA"){
    //    if(personagemOne.resultado > personagemTwo.resultado) {
    //        console.log(`${personagemOne.nome} ganhou a rodada!`);
    //        personagemOne.pontos += 1
    //        console.log(personagemOne.pontos)
    //     } else if (personagemOne.resultado < personagemTwo.resultado) {
    //        console.log(`${personagemTwo.nome} ganhou a rodada!`);
    //        personagemTwo.pontos += 1
    //        console.log(personagemOne.pontos)
    //     } else if (personagemOne.resultado == personagemTwo.resultado){
    //         console.log("Empate!");
    //     }  
    // } else {
    //     if(personagemOne.pontos < personagemTwo.pontos) {
    //        console.log(`${personagemOne.nome} perdeu um ponto`);
    //        personagemOne.pontos -=1
    //     } else if (personagemTwo.pontos < personagemOne.pontos) {
    //        console.log(`${personagemTwo.nome} perdeu um ponto!`);
    //        personagemTwo.pontos -=1
    //     } else if (personagemTwo.pontos === personagemOne.ponto){
    //         console.log("Empate!");
    //     }  
    // }
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
