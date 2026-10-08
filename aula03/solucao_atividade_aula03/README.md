# ⚠️ SOLUÇÃO DA ATIVIDADE 3

> **Esta pasta é a solução da Atividade 3**, publicada depois do prazo de entrega. Se você ainda está fazendo a atividade, pare aqui e volte ao roteiro, no SIGAA.

A solução tem duas partes, como a atividade: o site com as suas folhas de estilo (Parte A) e o que se esperava em cada item do relatório (Parte B).

## O site

- O código: [`index.html`](index.html), [`safra.html`](safra.html), [`cadastro-produtor.html`](cadastro-produtor.html) e [`sobre.html`](sobre.html) — as mesmas quatro páginas da Atividade 2, com as linhas novas no `head` —, as folhas [`reset.css`](reset.css), [`tokens.css`](tokens.css), [`estilo.css`](estilo.css) e [`casos.css`](casos.css), e as cinco imagens, tudo na mesma pasta — como na raiz do seu repositório.
- O site no ar: <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula03/solucao_atividade_aula03/>.

É **uma** resposta possível. A paleta, a letra e a escala são escolhas desta solução; as suas eram outras, e estavam certas se passassem nos cinco pares de contraste. O que a correção olhava é o que o roteiro pedia, e está aqui.

### O `head`, igual nas quatro páginas (Passos 1 a 3)

| O que o roteiro pedia | Como fica no código |
|---|---|
| O reset como está | `reset.css` é cópia idêntica de `aula03/inicio/reset.css` |
| As três linhas do Google Fonts | dois `<link rel="preconnect">` e o `<link href="https://fonts.googleapis.com/css2?family=Lora…&display=swap" rel="stylesheet">` |
| As três folhas, nesta ordem, depois do Google Fonts | `reset.css`, `tokens.css`, `estilo.css`, cada uma num `<link rel="stylesheet">` |
| O `casos.css` só na home | uma quarta linha `<link>`, depois do `estilo.css`, só no `index.html` |
| No HTML, nada além do `head` | o corpo das páginas é o da Atividade 2; o `type="text"` dos campos já estava lá |

### Os tokens (Passo 4)

| Token | Valor | O que decide |
|---|---|---|
| `--cor-fundo` | `#ece3f5` | lilás claro, diferente do creme dos slides |
| `--cor-superficie` | `#ffffff` | cartões, aviso, campos e células de dado |
| `--cor-texto` | `#231a2d` | o texto corrido |
| `--cor-texto-suave` | `#4e3d5e` | legenda, citação e rodapé |
| `--cor-marca` | `#5b2a86` | roxo do açaí, diferente do verde dos slides |
| `--cor-sobre-marca` | `#ffffff` | o texto em cima da marca |
| `--cor-borda` | `#cdbfdd` | linhas e contornos |
| `--fonte-texto`, `--fonte-titulo` | `system-ui, sans-serif` e `"Lora", serif` | texto na letra do sistema; títulos na Lora, com a serifa genérica como plano B |
| `--tamanho-texto`, `--tamanho-h3`, `--tamanho-h2`, `--tamanho-h1` | `1rem`, `1.25rem`, `1.563rem`, `1.953rem` | escala com multiplicador 1,25 (o comentário está no arquivo) |
| `--espaco-1` a `--espaco-4` | `0.5rem`, `1rem`, `1.5rem`, `2rem` | o ritmo vertical |
| `--raio`, `--sombra` | `12px`, `0 2px 6px rgb(0 0 0 / 15%)` | cantos e sombra dos cartões |

As medidas de contraste estão em comentários ao lado dos tokens de cor, como o Passo 10 pedia. Nenhuma cor aparece por extenso fora do `tokens.css`, e as folhas não têm `id`, `!important`, tag `style` nem atributo `style`.

### O estilo (Passos 5 a 8)

| O que o roteiro pedia | Como fica no `estilo.css` |
|---|---|
| A página inteira: fundo, cor, letra e tamanho, uma vez só | `body`, com os quatro tokens: o site inteiro herda |
| Conteúdo principal e relacionado com respiro | `main, aside`, com `padding` em tokens de espaço |
| Letra e altura de linha dos três títulos, numa regra só | `h1, h2, h3`: `font-family` do token de título e `line-height: 1.2`, sem unidade |
| Um tamanho da escala para cada nível | `h1`, `h2` e `h3`, cada um com o seu token |
| Títulos de segundo e terceiro nível na cor da marca; o de primeiro nível fora | `h2, h3` com `color: var(--cor-marca)`; o `h1` herda a cor do cabeçalho |
| Mais espaço antes do título do que depois; parágrafos separados por um degrau | `h2` e `h3` com `margin-top` maior que o `margin-bottom`; `p` com `margin-bottom: var(--espaco-2)` |
| Medida da linha entre 60 e 75 caracteres | `p { max-width: 34rem }`: em `rem`, acompanha a letra que a pessoa escolheu |
| Cabeçalho, menu e links | `.cabecalho-site` (fundo da marca, texto sobre a marca, preenchimento), `.menu` (`list-style: none`, `padding: 0`) e `.menu a` |
| O link da página atual em negrito, sem classe nova | `.menu a[aria-current="page"]`: seletor de atributo |
| Rodapé: linha em cima, texto suave **na classe** | `.rodape-site`, com `border-top`, `color: var(--cor-texto-suave)` e preenchimento |
| Lista sem bolinhas; cartão com fundo, borda, cantos, sombra, espaço entre eles e largura máxima | `.lista-produtos` e `.cartao-produto` (`max-width: 20rem`) |
| Legenda da foto, só dentro da figura | `.figura-destaque figcaption`: seletor descendente |
| Campo da busca | `.busca input[type="search"]`: descendente com atributo |
| Os dois botões iguais, numa regra só, sem classe nova | `.busca button, .formulario-cadastro button`: grupo de dois seletores descendentes |
| Aviso com destaque | `.aviso`, com borda na cor da marca |
| Tabela de safra | `.tabela-safra th, .tabela-safra td` (preenchimento), `.tabela-safra thead th` (só os meses, fundo da marca) e `.tabela-safra td` (superfície) |
| Moldura nos dois grupos de fora, nada no de dentro | `.formulario-cadastro > fieldset` (filho direto: só os dois de fora) e `fieldset fieldset` (`border: none`, `padding: 0`) |
| Título de cada grupo em negrito, na cor da marca | `legend` |
| Campos de digitar, lista de seleção e área de texto; os botões de escolha e a caixa de marcar ficam como estão | `.formulario-cadastro input[type="text"]`, `[type="email"]`, `[type="tel"]`, `[type="number"]`, `[type="date"]`, `select` e `textarea` |
| Citação, glossário e perguntas | `blockquote`, `dt` e `.pergunta` |

O link de pular e o menu em lista ficam como estavam: esconder um e deitar o outro é assunto do encontro 4.

## O relatório: o que se esperava em cada item

Os resultados abaixo foram observados em 08/10/2026, nestas mesmas páginas, no Chrome com o painel de estilos. No seu site os números são outros, porque a paleta, a letra e a escala eram suas; o que vale é a leitura de cada passo.

### Item 1 — A paleta e o contraste

- **As duas cores:** a marca, `#5b2a86` (o roxo do açaí), e o fundo, `#ece3f5` (um lilás claro). Nenhuma é a dos slides (verde `#2e6b30`, creme `#fbf8f1`), e o site é claro.
- **As cinco medidas**, no seletor de cor do painel:

| Par | Onde foi medido | Razão | Nível |
|---|---|---|---|
| o texto sobre o fundo | o parágrafo do endereço, no conteúdo relacionado | 13,42:1 | AAA |
| o texto suave sobre o fundo | a legenda da foto | 7,83:1 | AAA |
| a marca sobre o fundo | um título de segundo nível | 7,95:1 | AAA |
| a cor sobre a marca | um link do menu | 9,9:1 | AAA |
| o texto sobre a superfície | um cartão de produto | 16,7:1 | AAA |

  O nível é o da régua do texto comum (AA a partir de 4,5 e AAA a partir de 7), também para o título, como o roteiro dizia.
- **O par mais perto do limite:** o texto suave sobre o fundo, com 7,83:1. É o único que se escolhe mais claro de propósito, para ficar em segundo plano; ainda assim fica bem acima de 4,5.
- **Se um par não passasse**, por exemplo um primeiro `--cor-texto-suave: #8a7a98` (um lilás acinzentado), a razão calculada pela fórmula do WCAG seria 3,17:1, abaixo de 4,5. A correção é escurecer o token — aqui, `#4e3d5e` — e medir de novo: 7,83:1.
- A `--cor-texto` leva duas medidas porque é o texto de dois pares: sobre o fundo (parágrafo do endereço) e sobre a superfície (cartão).

### Item 2 — A escala e a letra

- **O multiplicador é 1,25**, e cada degrau é o anterior vezes 1,25: `1rem` (texto) → `1.25rem` (`h3`) → `1.563rem` (`h2`, de 1,5625) → `1.953rem` (`h1`, de 1,953125). Com a letra a 16 px, os títulos medem 20 px, 25 px e 31,2 px.
- **A família e o plano B:** a Lora, do Google Fonts, com `serif` no fim: `--fonte-titulo: "Lora", serif;`.
- **Numa rede lenta,** o texto corrido aparece de imediato, na letra do sistema. Os títulos aparecem primeiro na serifa genérica do aparelho, o plano B, porque o endereço do Google Fonts termina em `display=swap`; quando a Lora chega, eles trocam de letra. Sem o `swap`, o título ficaria sem aparecer até a fonte chegar.

### Item 3 — As três disputas

| Caso | Previsão | O que o painel mostrou |
|---|---|---|
| 1. A parte importante do aviso | Fica na **cor da marca**. `.aviso strong` pesa 0-1-1 (uma classe e uma tag) e `strong` pesa 0-0-1: vence a de maior especificidade, mesmo vindo antes na folha. | `.aviso strong` em cima; `strong { color }` riscada. Especificidade: (0,1,1) contra (0,0,1). |
| 2. O rótulo "Procurar produto" | Fica no **texto suave**. `.busca label` pesa 0-1-1 e `label[for]` também (o atributo conta na coluna da classe): empate, e vence a que vem por último, `label[for]`. | `label[for]` em cima; `.busca label` riscada. Os dois mostram (0,1,1). |
| 3. O parágrafo do rodapé | Fica na **cor do texto**. `.rodape-site` pinta o `<footer>`, e o `<p>` só a herdaria; `footer p` declara a cor direto no `<p>`, e declaração direta vence herança, qualquer que seja a especificidade. | No `<p>`, `footer p` em cima. Em "Herdado de footer.rodape-site", o `color` do `casos.css` (marca) e, riscado, o do `estilo.css` (texto suave): nenhum dos dois chega ao `<p>`. |

Os dois tropeços mais comuns: no caso 2, achar que a classe vence a tag com atributo (o empate é em 0-1-1, e a ordem decide); no caso 3, achar que a cor do rodapé pinta o parágrafo (a herança perde para qualquer regra que mire o próprio parágrafo). Previsão errada, com a explicação de onde o raciocínio falhou, valia o mesmo que a certa.

### Item 4 — Um cartão por dentro

Com a janela larga (1280 px), o cartão mede 320 × 58 px, e a aba Calculado mostra:

| Camada | Valor | De onde vem |
|---|---|---|
| Conteúdo | 286 × 24 px | a conta do navegador: a largura que sobra, e uma linha de `1.5 × 16 px` (a altura de linha vem do reset) |
| Preenchimento | 16 px nos quatro lados | `var(--espaco-2)`, que é `1rem` |
| Borda | 1 px | o `1px` escrito na regra (a espessura fica em `px`) |
| Margem | 0 em cima e nos lados, 16 px embaixo | `margin-bottom: var(--espaco-2)`; as outras são 0 por causa do `* { margin: 0 }` do reset |

A conta: 286 + 16 + 16 + 1 + 1 = **320 px**, que é exatamente o `max-width: 20rem`. A janela é larga, então o cartão cresce até o limite. E o limite inclui o preenchimento e a borda por causa do `box-sizing: border-box` do reset: sem ele, o conteúdo teria 320 px, e o cartão, 354.

### O validador

Nas quatro páginas, o Nu Html Checker (o motor do validador do W3C) não aponta nenhuma mensagem: as linhas novas do `head` não trouxeram erro.
