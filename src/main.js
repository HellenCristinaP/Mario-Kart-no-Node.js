import personagens from "./scripts/persons.js";
import { calcularResultadoPontos, calcularResultadoGanho, verificarEliminacao } from "./scripts/script.js";
import { escolherRota } from "./scripts/rotas.js";

console.log("Bem-vindo ao Mario Kart Terminal!");
// console.log("Escolha seu personagem:");

// personagens.forEach((personagem, index) => {
//   console.log(`${index + 1}. ${personagem.nome}`);
// });

for (let i = 0; i < 5; i++) { 
    console.log(`\n------ Rodada ${i + 1} ------`);
    const personagemOne = personagens[0]; // Mario
    const personagemTwo = personagens[1]; // Luigi
    const rotaAleatoria = escolherRota();

    
    console.log(`Rota: ${rotaAleatoria}`);
    
    calcularResultadoPontos(personagemOne, rotaAleatoria);
    calcularResultadoPontos(personagemTwo, rotaAleatoria);
    calcularResultadoGanho(personagemOne, personagemTwo);

    if(verificarEliminacao(personagemOne, personagemTwo)) {
        break;
    }
}

console.log("\nFim do jogo!");
console.log(`Pontos finais: ${personagens[0].nome}: ${personagens[0].pontos} pontos, ${personagens[1].nome}: ${personagens[1].pontos} pontos`);
calcularResultadoGanho(personagens[0], personagens[1]);
