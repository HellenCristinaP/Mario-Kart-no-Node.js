# Projeto Mario Kard
Projeto proposto pela DIO no bootcamp Jornada Para o Futuro - Node.js
## Organização das branches
- branch main - primeira tentativa do Mario Kard, sem assistir o tutorial.
- branch DIO - seguindo o tutorial.
- branch final - colocando todas as habilidades do tutorial sob a branch main. main + DIO
## Regras de Negócios
- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto;
    - Caso o bloco da pista seja uma **RETA**, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
    - Caso o bloco da pista seja uma **CURVA**, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
    - Caso o bloco da pista seja um **CONFRONTO**, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto
    - Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)