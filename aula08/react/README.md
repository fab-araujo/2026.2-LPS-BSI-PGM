# Aula 8 — o código do tabuleiro e do `Produto`

Cada arquivo é **um passo** do tutorial do jogo da velha (<https://react.dev/learn/tutorial-tic-tac-toe>), com o nome que ele tem nos slides: `App_1.jsx`, `App_2.jsx` e assim por diante. No CodeSandbox o seu arquivo é sempre o `App.js`: o que muda de um passo para o outro é o conteúdo dele.

Estes arquivos são para **comparar com o seu**, não para copiar: o que você digita é o que você aprende. Eles não abrem no navegador sozinhos, porque precisam do React e do `styles.css` do projeto do tutorial (as regras `.square` e `.board-row` vêm dele).

## O tabuleiro — [`tabuleiro/`](tabuleiro/)

| Arquivo | O que o passo faz | O que aparece |
|---|---|---|
| `App_1.jsx` | o `Square` que o tutorial entrega | um quadrado com **X** |
| `App_2.jsx` | o botão duplicado na mesma linha | **erro de propósito:** elementos JSX vizinhos precisam de uma tag que os envolva |
| `App_3.jsx` | os dois botões dentro de uma `<div>` | dois **X** |
| `App_4.jsx` | os dois botões dentro de um fragmento `<>` | dois **X** |
| `App_5.jsx` | nove botões | nove **X** numa linha |
| `App_6.jsx` | três `<div className="board-row">` | a grade 3 × 3 de **X** |
| `App_7.jsx` | os números de 1 a 9 no lugar do X | a grade de 1 a 9 |
| `App_8.jsx` | o componente passa a se chamar `Board` | a mesma grade |
| `App_9.jsx` | um novo `Square`, com um botão, acima do `Board` | a mesma grade (o `Square` ainda não é usado) |
| `App_10.jsx` | os botões viram `<Square />` | nove **1** |
| `App_11.jsx` | o `Square` recebe a prop `value` | a grade **vazia**: o `Board` ainda não passou o valor |
| `App_12.jsx` | o `Board` passa `value="1"` a `value="9"` | a grade de 1 a 9 |
| `App_13.jsx` | `handleClick` com `alert` | uma caixa ao clicar |
| `App_14.jsx` | `alert` vira `console.log` | `clicou!` no Console a cada clique |
| `App_15.jsx` | `useState` no `Square` que ainda recebe `value` | **erro de propósito:** o nome `value` foi declarado duas vezes |
| `App_16.jsx` | experimento com uma variável `x` fora do componente | todos os quadrados começam com **X**; clicar só escreve no Console |
| `App_17.jsx` | o `Board` sem props; o `Square` não recebe mais nada | o mesmo que o `App_16` |
| `App_18.jsx` | `setValue("X")` no clique | o **X** aparece só no quadrado clicado |

Os passos 2 e 15 dão erro **de propósito**, como nos slides; a mensagem aparece na visualização.

## A AgroFeira em componentes — [`produto/`](produto/)

O mesmo caminho, com produtos no lugar dos quadrados:

| Arquivo | O que faz |
|---|---|
| `App_16.jsx` | `Produto({ nome })` e um `Catalogo` com três produtos (os nomes são os do exemplo; use os do seu catálogo) |
| `App_17.jsx` | o botão do produto, com `useState("Adicionar")`: clicar muda só o produto clicado para **No carrinho** |
| `styles_18.css` | as duas regras de estilo, para colar no fim do `styles.css` (as cores são as do exemplo roxo; no seu site são as do seu `tokens.css`) |

Conferido no CodeSandbox: clicar no primeiro e no terceiro produto muda só esses dois.
