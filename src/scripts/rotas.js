const rotas = ["RETA", "CURVA", "CONFRONTO"];

export function escolherRota() {
    for (let i = 0; i < 5; i++) {
        let rotaAleatoria = rotas[Math.floor(Math.random() * rotas.length)];
        return rotaAleatoria;
    }
}

export function habilidadeRota(rota) {
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