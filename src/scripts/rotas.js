import { randomizar } from "./math.js";

const rotas = ["RETA", "CURVA", "CONFRONTO"];

export function escolherRota() {
    for (let i = 0; i < 5; i++) {
        const rotaAleatoria = rotas[randomizar(rotas.length) - 1];
        return rotaAleatoria;
    }
}

export function obterHabilidades(rota) {
    switch (rota) {
        case "RETA":
            return "velocidade";
        case "CURVA":
            return "manobrabilidade";
        case "CONFRONTO":
            return "poder";
        default:
            return null;
    }
}