import personagens from "./scripts/persons.js";
import { calcularResultadoPontos, verificarEliminacao } from "./scripts/script.js";
import { escolherRota } from "./scripts/rotas.js";

console.log("Bem-vindo ao Mario Kart Terminal!");

let contador = 0

for (contador = 0; contador < 5; contador++) { 
    console.log(`\n------ Rodada ${contador + 1} ------`);
    const personagemOne = personagens[Math.floor(Math.random() * personagens.length) + 1]
    let personagemTwo = personagens[Math.floor(Math.random() * personagens.length) + 1]

    while(personagemOne === personagemTwo){
        personagemTwo = personagens[Math.floor(Math.random() * personagens.length) + 1]
    }

    let personagensEscolhidos = [personagemOne, personagemTwo];

    const rotaAleatoria = escolherRota();
    console.log(`Rota: ${rotaAleatoria}`);
    
    calcularResultadoPontos(personagensEscolhidos, rotaAleatoria);

    console.log("\nFim do jogo!");
    console.log(`Pontos finais: ${personagemOne.nome}: ${personagemOne.pontos} pontos, ${personagemTwo.nome}: ${personagemTwo.pontos} pontos`);
    

    if(verificarEliminacao(personagemOne, personagemTwo)) {
        break;
    }

}
