import { calcularResultadoPontos, verificarEliminacao, escolherPersonagens, calcularResultadoConfronto, personagemVencedor } from "./scripts/script.js";
import { escolherRota } from "./scripts/rotas.js";

console.log("Bem-vindo ao Mario Kart Terminal!");

let contador = 0

const personagensEscolhidos = escolherPersonagens();

for (contador = 0; contador < 7; contador++) { 
    console.log(`\n------ Rodada ${contador + 1} ------`);

    const rotaAleatoria = escolherRota();
    console.log(`Rota: ${rotaAleatoria}`);
    calcularResultadoPontos(personagensEscolhidos,rotaAleatoria);
    
    if(contador >= 1){
        calcularResultadoConfronto(personagensEscolhidos, rotaAleatoria);

        if(verificarEliminacao(personagensEscolhidos)) {
            break;
        }
    }
        
    personagensEscolhidos[0].resultado = 0
    personagensEscolhidos[1].resultado = 0
}

console.log("\nFim do jogo!");
personagemVencedor(personagensEscolhidos);