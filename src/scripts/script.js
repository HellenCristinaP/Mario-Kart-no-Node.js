import personagens from "./persons.js";
import { obterHabilidades } from "./rotas.js";
import { randomizar } from "./math.js";

export function rolarDado() {
    return randomizar(6);
}

export function escolherPersonagens() {
    const personagemOne = personagens[randomizar(personagens.length) - 1];
    let personagemTwo = personagens[randomizar(personagens.length) - 1];

    while (personagemOne === personagemTwo) {
        personagemTwo = personagens[randomizar(personagens.length) - 1];
    }

    return [personagemOne, personagemTwo];
}

export function calcularResultadoPontos(personagensEscolhidos, rota) {

    personagensEscolhidos.forEach((personagem) => {
        const habilidade = obterHabilidades(rota);
        const valorHabilidade = personagem[habilidade];
        const valorDado = rolarDado();
        const resultado = valorHabilidade + valorDado;

        if (!habilidade) {
            console.log(`Rota ${rota} não possui uma habilidade associada.`);
            return;
        }

        if (valorHabilidade === undefined) {
            console.log(`Habilidade ${habilidade} não encontrada para o personagem ${personagem.nome}.`);
            return;
        }

        console.log(`Personagem: ${personagem.nome}`);
        console.log(`Resultado = ${valorHabilidade} + ${valorDado} = ${resultado}`);

        personagem.resultado = resultado;
    })

    calcularResultadoGanho(personagensEscolhidos, rota)
}

function calcularResultadoGanho(personagensEscolhidos, rota) {
    const personagemOne = personagensEscolhidos[0]
    const personagemTwo = personagensEscolhidos[1]

    if (rota === "RETA" || rota === "CURVA") {
        if (personagemOne.resultado > personagemTwo.resultado) {
            console.log(`${personagemOne.nome} ganhou a rodada!`);
            personagemOne.pontos += 1
        } else if (personagemOne.resultado < personagemTwo.resultado) {
            console.log(`${personagemTwo.nome} ganhou a rodada!`);
            personagemTwo.pontos += 1
        } else {
            console.log("Empate!");
        }
    }
}

export function calcularResultadoConfronto(personagensEscolhidos, rota) {
    const personagemOne = personagensEscolhidos[0]
    const personagemTwo = personagensEscolhidos[1]

    if (rota === "CONFRONTO" && personagemOne.pontos > 0 && personagemTwo.pontos > 0) {
        if (personagemOne.resultado > personagemTwo.resultado) {
            console.log(`${personagemTwo.nome} perdeu um ponto!`);
            personagemTwo.pontos -= 1
        } else if (personagemOne.resultado < personagemTwo.resultado) {
            console.log(`${personagemOne.nome} perdeu um ponto!`);
            personagemOne.pontos -= 1
        } else {
            console.log("Empate no confronto!");
        }
    }
}

export function verificarEliminacao(personagensEscolhidos) {
    const personagemOne = personagensEscolhidos[0];
    const personagemTwo = personagensEscolhidos[1];

    if (personagemOne.pontos < 0) {
        console.log(`\n${personagemOne.nome} foi eliminado!`);
        return true;
    } else if (personagemTwo.pontos < 0) {
        console.log(`\n${personagemTwo.nome} foi eliminado!`);
        return true;
    } else {
        return false;
    }
}

export function personagemVencedor(personagensEscolhidos) {
    const personagemOne = personagensEscolhidos[0];
    const personagemTwo = personagensEscolhidos[1];

    console.log(`Pontos finais: ${personagemOne.nome}: ${personagemOne.pontos} pontos, ${personagemTwo.nome}: ${personagemTwo.pontos} pontos`);

    if (personagemOne.pontos > personagemTwo.pontos) {
        console.log(`O vencedor é ${personagemOne.nome}!`);
    } else if (personagemTwo.pontos > personagemOne.pontos) {
        console.log(`O vencedor é ${personagemTwo.nome}!`);
    } else {
        console.log("Empate!");
    }
}