# Projeto Mario Kart - Terminal Game
Projeto proposto pela DIO no bootcamp Jornada Para o Futuro - Node.js

Um jogo de corrida no terminal onde personagens do Mario competem em diferentes tipos de pista, utilizando atributos específicos (velocidade, manobrabilidade, poder) + uma rolagem de dados para ganhar.

## Organização das branches
- **branch main** - primeira tentativa do Mario Kart, sem assistir o tutorial.
- **branch DIO** - seguindo o tutorial.
- **branch final** - colocando todas as habilidades do tutorial sob a branch main. ou seja, main + DIO

---

## Regras de Negócios

Os personagens irão correr em uma pista aleatória durante até 5 rodadas.

A cada rodada, será sorteado um bloco da pista que pode ser:

- **RETA**: Jogadores rolam um dado (1-6) e somam o atributo **VELOCIDADE**. Quem vencer ganha 1 ponto.
- **CURVA**: Jogadores rolam um dado (1-6) e somam o atributo **MANOBRABILIDADE**. Quem vencer ganha 1 ponto.
- **CONFRONTO**: Jogadores rolam um dado (1-6) e somam o atributo **PODER**. Quem perder perde 1 ponto.

**Regra de eliminação:** Nenhum jogador pode ter pontuação abaixo de 0. Se um personagem atingir -1 pontos, é eliminado e o jogo termina.

---

## Como Executar

### Pré-requisitos
- Node.js 16+ instalado

### Rodar o jogo
```bash
node src/main.js
```
ou
```bash
node run jogar
```

## Estrutura do Projeto

```
src/
├── main.js                 # Arquivo principal (entrada do jogo)
├── scripts/
│   ├── persons.js          # Dados dos personagens
│   ├── rotas.js            # Lógica de rotas e habilidades
│   ├── script.js           # Lógica principal do jogo
│   └── math.js             # Funções matemáticas utilitárias
feedback.md                 # Sugestões de refatoração
package.json               # Informações sobre o diretório, dependências e licença
package.json               # Scripts do projeto
```

---

## Documentação das Funções

### `src/scripts/math.js`

#### `randomizar(max)`
- **Descrição:** Retorna um número aleatório entre 1 e `max`.
- **Parâmetros:** `max` (número) - valor máximo do intervalo
- **Retorno:** Número inteiro entre 1 e `max`
- **Exemplo:** `randomizar(6)` retorna 1-6 (como um dado d6)

---

### `src/scripts/persons.js`

#### `personagens` (objeto exportado)
- **Descrição:** Array contendo os 5 personagens do jogo com seus atributos.
- **Estrutura:** Cada personagem possui:
  - `nome` (string) - nome do personagem
  - `velocidade` (0-5) - atributo de velocidade
  - `manobrabilidade` (0-5) - atributo de manobrabilidade
  - `poder` (0-5) - atributo de poder
  - `pontos` (número) - pontuação atual (inicializa em 0)
  - `resultado` (número) - resultado da última rodada

**Personagens:**
- **Mario**: velocidade 4, manobrabilidade 3, poder 3
- **Luigi**: velocidade 3, manobrabilidade 4, poder 4
- **Peach**: velocidade 3, manobrabilidade 4, poder 2
- **Bowser**: velocidade 5, manobrabilidade 2, poder 5
- **Yoshi**: velocidade 2, manobrabilidade 4, poder 3

---

### `src/scripts/rotas.js`

#### `escolherRota()`
- **Descrição:** Escolhe uma rota aleatória para a rodada.
- **Retorno:** String ("RETA", "CURVA" ou "CONFRONTO")

#### `obterHabilidades(rota)`
- **Descrição:** Retorna o atributo correspondente à rota.
- **Parâmetros:** `rota` (string) - tipo de rota
- **Retorno:** String com o nome da habilidade ("velocidade", "manobrabilidade", "poder") ou `null` se rota inválida
- **Mapeamento:**
  - "RETA" → "velocidade"
  - "CURVA" → "manobrabilidade"
  - "CONFRONTO" → "poder"

---

### `src/scripts/script.js`

#### `rolarDado()`
- **Descrição:** Rola um dado de 6 lados usando a função `randomizar`.
- **Retorno:** Número inteiro entre 1 e 6

#### `escolherPersonagens()`
- **Descrição:** Escolhe aleatoriamente 2 personagens diferentes para o jogo.
- **Retorno:** Array com 2 personagens `[personagem1, personagem2]`
- **Lógica:** Garante que os dois personagens selecionados são diferentes

#### `calcularResultadoPontos(personagensEscolhidos, rota)`
- **Descrição:** Calcula o resultado (dado + habilidade) para cada personagem e determina o vencedor da rodada.
- **Parâmetros:**
  - `personagensEscolhidos` (array) - 2 personagens
  - `rota` (string) - tipo de rota ("RETA" ou "CURVA")
- **Lógica:**
  1. Obtém a habilidade correspondente à rota
  2. Para cada personagem: rola o dado e soma a habilidade
  3. Compara resultados e atribui o ponto ao vencedor
- **Efeitos colaterais:** Modifica os atributos `resultado` e `pontos` dos personagens
- **Log:** Exibe resultado do cálculo para cada personagem

#### `calcularResultadoConfronto(personagensEscolhidos, rota)`
- **Descrição:** Aplica a lógica de confronto (quem perder perde um ponto).
- **Parâmetros:**
  - `personagensEscolhidos` (array) - 2 personagens
  - `rota` (string) - tipo de rota
- **Lógica:** Se a rota for "CONFRONTO", o personagem com menos pontos perde 1 ponto
- **Efeitos colaterais:** Modifica o atributo `pontos` do personagem

#### `verificarEliminacao(personagensEscolhidos)`
- **Descrição:** Verifica se algum personagem foi eliminado (pontos < 0).
- **Parâmetros:** `personagensEscolhidos` (array) - 2 personagens
- **Retorno:** `true` se alguém foi eliminado, `false` caso contrário
- **Log:** Exibe mensagem de eliminação se aplicável

---

### `src/main.js`

#### Fluxo Principal
O arquivo `main.js` orquestra o jogo:

1. **Inicialização:**
   - Exibe mensagem de boas-vindas
   - Escolhe 2 personagens aleatoriamente

2. **Loop de Rodadas:**
   - Executa até o número do contador(7) rodadas ou até uma eliminação
   - A cada rodada:
     - Sorteia uma rota aleatória
     - Calcula resultado (pontos) para reta/curva
     - Aplica lógica de confronto se for confronto
     - Verifica se alguém foi eliminado (quebra o loop se sim)

3. **Finalização:**
   - Exibe pontuação final dos dois personagens

---

## Implementações Realizadas

- ✅ Seleção aleatória de personagens;
- ✅ Seleção aleatória de rotas;
- ✅ Cálculo de resultados (dado + atributo);
- ✅ Sistema de pontuação por tipo de pista;
- ✅ Lógica de confronto (perde pontos);
- ✅ Verificação de eliminação;
- ✅ Loop de 5 rodadas com quebra por eliminação;
- ✅ Função utilitária `randomizar()` para aleatoriedade;
- ✅ Mapeamento claro de habilidades por rota.