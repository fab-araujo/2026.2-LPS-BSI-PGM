# ⚠️ SOLUÇÃO DA ATIVIDADE 4

> **Esta pasta é a solução da Atividade 4**, publicada depois do prazo de entrega. Se você ainda está fazendo a atividade, pare aqui e volte ao roteiro, no SIGAA.

A solução tem duas partes, como a atividade: o site com o catálogo e as folhas em camadas (Partes A a C) e o que se esperava em cada item do relatório (Parte D).

## O site

- O código: [`catalogo.html`](catalogo.html), [`index.html`](index.html), [`safra.html`](safra.html), [`cadastro-produtor.html`](cadastro-produtor.html) e [`sobre.html`](sobre.html); as folhas [`camadas.css`](camadas.css), [`reset.css`](reset.css), [`tokens.css`](tokens.css), [`base.css`](base.css), [`componentes.css`](componentes.css) e [`utilitarios.css`](utilitarios.css); e as doze imagens, tudo na mesma pasta — como na raiz do seu repositório.
- O site no ar: <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula04/solucao_atividade_aula04/> (o catálogo é [`catalogo.html`](https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula04/solucao_atividade_aula04/catalogo.html)).

É **uma** resposta possível. A paleta é a da solução da Atividade 3 (o roxo do açaí), com um tema escuro de lilás claro; o seu era outro, e estava certo se os pares medissem 4,5:1 ou mais. O ponto de quebra e a condição da container query também dependem do conteúdo de cada um: se os seus números forem outros, o que vale é como foram descobertos.

### O que mudou no HTML

Só o que o roteiro permitia: o `head` das cinco páginas e o item **Catálogo** no menu das quatro antigas, logo depois de Início (o `aria-current="page"` fica só no item da própria página). O `catalogo.html` é o do material pronto, sem mudança no corpo.

| O que o roteiro pedia | Como fica no código |
|---|---|
| O `camadas.css` primeiro no `head`, antes até do Google Fonts | `camadas.css`, depois os três links do Google Fonts, depois as cinco folhas |
| As folhas, nesta ordem | `reset.css`, `tokens.css`, `base.css`, `componentes.css`, `utilitarios.css` |
| O `estilo.css` fora de todas as páginas | não existe; o `casos.css` também saiu do `head` da home (e não está nesta pasta) |
| Nenhuma classe nova, nenhum `style` | o corpo das páginas é o da Atividade 3 e o do material pronto |

## Parte A — o catálogo e o espaço

| O que o roteiro pedia | Como fica |
|---|---|
| **Passo 3.** A grade: colunas que se ajustam sozinhas, cada uma com no mínimo 12rem, sem media query | `main .lista-produtos { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: var(--espaco-2); }` |
| O destaque ocupa a linha inteira, sem número fixo de colunas | `.destaque { grid-column: 1 / -1; }` |
| A lista da lateral, uma coluna só | `aside .lista-produtos { grid-template-columns: 1fr; }`, com o mesmo `gap` |
| Os cartões ocupam a coluna toda: sem a largura máxima e a margem da Atividade 3 | o `.cartao-produto` desta solução não declara `max-width` nem `margin-bottom`; o espaço vem do `gap` |
| Dentro do cartão: foto arredondada, produtor no texto suave, preço em negrito, botão igual aos outros | `.cartao-produto img`, `.produtor`, `.preco`; o botão entra na regra dos botões |
| **Passo 4.** A casca, mobile-first: uma coluna na base, três a partir do ponto de quebra, por áreas nomeadas | `.pagina-catalogo { display: grid; grid-template-columns: minmax(0, 1fr); grid-template-areas: "cabecalho" "menu" "conteudo" "lateral" "rodape"; }` e, dentro de `@media (min-width: 40rem)`, `10rem minmax(0, 1fr) 14rem` com as áreas em três colunas |
| O menu: fundo da marca; só o `nav` filho direto do `body` | `.pagina-catalogo > nav`: o das categorias, dentro do `main`, não é alcançado |
| A coluna do meio nunca alarga a página | `minmax(0, 1fr)` nas duas disposições |
| O ponto de quebra, em rem, pelo conteúdo | **40rem** (640 px). Menu 10rem + lateral 14rem + dois espaços de 1rem + um cartão de 12rem + os dois preenchimentos de 1rem do `main` = 40rem |
| **Passo 5.** A barra de categorias: botões lado a lado, quebrando de linha, sem bolinhas | `.barra-categorias { display: flex; flex-wrap: wrap; gap: var(--espaco-1); list-style: none; padding: 0; margin-bottom: var(--espaco-3); }` |
| **Passo 6.** O cartão que se adapta: o `li` é o contêiner, o `article` é o que muda | `.cartao-produto { container-type: inline-size; }` e `@container (min-width: 26rem) { .cartao-produto article { display: grid; grid-template-columns: 10rem 1fr; … } }`, com o comentário **"Container query —"** |
| A condição pelo conteúdo | **26rem**: foto de 10rem + 1rem de espaço + 15rem que o texto pede sem apertar |

## Parte B — o teclado e o tema

| O que o roteiro pedia | Como fica |
|---|---|
| **Passo 7.** O botão com o ponteiro em cima: fundo `--cor-marca-forte`, texto com 4,5:1 ou mais | uma regra `:hover` para os quatro grupos de botões (lupa, cadastro, categorias e cartões); `--cor-marca-forte: #3f1b61`, 13,63:1 com o `--cor-sobre-marca` |
| O foco: um anel afastado, numa regra só, na cor do `--cor-foco` | `:focus-visible { outline: 3px solid var(--cor-foco); outline-offset: 3px; }`; `--cor-foco: #0b4f9c`, 6,46:1 sobre o fundo e 8,04:1 sobre a superfície |
| Sobre a faixa da marca, o anel na cor feita para ficar sobre ela | `.cabecalho-site :focus-visible, .menu :focus-visible, .pular:focus-visible { outline-color: var(--cor-sobre-marca); }`. O `.menu`, e não o `nav`: o das categorias fica sobre o fundo claro e precisa do anel azul |
| **Passo 8.** O cartão cujo botão tem o foco do teclado | `.cartao-produto:has(button:focus-visible) { outline: 3px solid var(--cor-foco); outline-offset: 3px; }`, com o comentário **":has() —"**. O `outline` não muda o tamanho do cartão nem empurra os vizinhos |
| **Passo 9.** O link de pular: fora da tela, aparece no foco | `.pular { position: absolute; top: -10rem; … }` e `.pular:focus { top: var(--espaco-1); }`. Fora da tela, e não `display: none`, para continuar no Tab. Sem `grid-area`: o `position: absolute` o tira da casca, e a página começa pelo cabeçalho, colado no topo |
| **Passo 10.** O tema escuro, só nos tokens | `@media (prefers-color-scheme: dark)` no fim do `tokens.css`, dando outros valores aos nove tokens de cor, e `:root { color-scheme: light dark; }`. Nenhuma regra de peça muda |

## Parte C — as camadas

| O que o roteiro pedia | Como fica |
|---|---|
| O `camadas.css`, só com a lista | `@layer reset, base, componentes, utilitarios;` |
| O reset na camada `reset`, os tokens (com o tema escuro e o `color-scheme`) na `base` | `reset.css` abre com `@layer reset {` e fecha com `}`; `tokens.css`, com `@layer base {` |
| `base.css`: o que vale para a página e os elementos, a casca e o anel de foco | `body`, `main`/`aside`, `h1` a `h3`, `p`, `blockquote`, `dt`, `legend`, `fieldset fieldset`, o anel de foco com a exceção sobre a faixa, a casca com o `@media (min-width: 40rem)` |
| `componentes.css`: as peças, com estados e container queries | `.pular`, `.cabecalho-site`, `.menu`, `.rodape-site`, `.busca`, os botões e o `:hover`, `.barra-categorias`, as listas, `.cartao-produto` com as suas partes, o `@container` e o `:has()`, `.tabela-safra`, `.formulario-cadastro`, `.pergunta` |
| `utilitarios.css`: existe, com a camada declarada | `@layer utilitarios {}` |
| Os nomes: o componente antes da parte | `.cartao-produto .produtor`, `.cartao-produto .preco`, `.cartao-produto h3`, `.tabela-safra thead th` |
| Os seletores repetidos, juntados | as cinco regras de botão da Atividade 3 e da Parte B viraram **uma** (`.busca button, .formulario-cadastro button, .barra-categorias button, .cartao-produto button`), e o `:hover` é uma só, para o mesmo grupo |

Conferido no painel e por medição: com a **home e as quatro páginas**, em 360, 1024 e 1920 px e nos dois temas, a aparência é a mesma da versão em um `estilo.css` só (2136 elementos comparados, nenhuma diferença nas propriedades de aparência), e **todas as regras do site** ficam sob um cabeçalho `Layer` no painel Estilos — nenhuma solta, nenhuma na folha do navegador a não ser as de fábrica.

## O relatório: o que se esperava em cada item

Os resultados abaixo foram observados em 19/10/2026, nestas mesmas páginas, no Chrome. No seu site os números são outros, porque a paleta, o ponto de quebra e a condição da container query eram seus; o que vale é a leitura de cada passo.

### Item 1 — Os pontos de quebra

- **O ponto de quebra da casca: 40rem (640 px).** Descoberto somando o que as três colunas pedem no mínimo (menu 10rem, lateral 14rem, dois espaços de 1rem, e um cartão de 12rem com os dois preenchimentos do `main`) e confirmado alargando a janela no modo dispositivo. Em 639 px a página está em uma coluna; um pouco antes de 640 px, três colunas deixariam o centro mais estreito que um cartão de 12rem. **No ponto (640 px, a condição `min-width: 40rem` já vale), a página tem três colunas**, e o centro fica com exatamente uma coluna de cartões de 192 px.
- **A condição da container query: 26rem (416 px).** A conta é a da foto (10rem), o espaço entre foto e texto (1rem) e o mínimo que o texto pede (15rem). Confirmado estreitando um cartão: abaixo disso, o título e o produtor viram tiras de poucas palavras.
- **Colunas de cartões na grade:** 1 em 360 px; 2 em 1024 px (a largura do meio, em que o destaque já está deitado); 7 em 1920 px.
- **O teste de rolagem** (`document.documentElement.scrollWidth > document.documentElement.clientWidth`):

| Largura | 320 px | 360 px | 639 px (1 px abaixo) | 640 px (o ponto) | 1024 px | 1920 px |
|---|---|---|---|---|---|---|
| Resultado | `false` | `false` | `false` | `false` | `false` | `false` |

### Item 2 — Container query ou media query

Na janela de 1024 px o destaque fica deitado e os cartões da grade e da lateral ficam em coluna. A largura da área de conteúdo de cada contêiner, na aba Calculado:

| Cartão | Largura do contêiner | Resultado |
|---|---|---|
| Destaque (linha inteira da grade) | 542 px (33,9rem) | deitado: passa de 26rem |
| Cartão da grade (1 de 2 colunas) | 246 px (15,4rem) | em coluna |
| Cartão da lateral | 158 px (9,9rem) | em coluna |

A janela é uma só, e uma media query a mediria uma vez: os três cartões deitariam ou nenhum deitaria. A container query mede o espaço de cada cartão, e na mesma tela os três contêineres têm larguras diferentes.

As duas linhas de comentário do código:

```css
/* Container query — o cartão deita a foto ao lado do texto quando o espaço dele passa de 26rem, e não pela largura da janela. */
/* :has() — contorna o cartão inteiro, na cor do anel, quando o botão dentro dele recebe o foco do teclado. */
```

A barra de categorias é Flexbox porque é **uma fila**, um só eixo, em que cada botão tem o tamanho do próprio texto e quebra de linha quando não cabe. A lista de cartões é Grid porque são **duas dimensões** ao mesmo tempo: colunas definidas pelo espaço e um destaque que ocupa a linha inteira (o critério da seção 6.6).

### Item 3 — Teclado e foco

- **A ordem do Tab no catálogo:** link de pular → os cinco links do menu → os seis botões da barra de categorias → os sete botões Adicionar do conteúdo (o do destaque e os da grade) → os dois da lateral. Depois do Enter no link de pular, o próximo Tab cai em **Todos**, o primeiro elemento do conteúdo, e não de volta no menu.
- **Onde o anel precisou de outra cor:** sobre a faixa da marca (os links do menu, o cabeçalho e o link de pular), onde o azul-escuro do `--cor-foco` quase some sobre o roxo; ali o anel usa o `--cor-sobre-marca`, branco no tema claro. Nos botões e nos campos, sobre o fundo claro ou a superfície, vale o `--cor-foco`. O anel do link de pular, que aparece sobre o cabeçalho, é branco.
- **Medidas no tema claro:** `--cor-foco` 6,46:1 sobre o fundo e 8,04:1 sobre a superfície (régua dos contornos: 3:1); `--cor-marca-forte` 13,63:1 com o `--cor-sobre-marca` (régua do texto: 4,5:1).

### Item 4 — O tema escuro

A marca do escuro é `#c9a2f0` (o lilás claro, ainda reconhecível como o roxo do açaí) e o fundo, `#1d1526`; a superfície é `#2b2036`, e o texto sobre a marca passa a ser o do próprio fundo. Medidas com o tema emulado (régua do texto comum: AA a partir de 4,5; AAA a partir de 7):

| Par | Razão | Nível |
|---|---|---|
| texto sobre o fundo | 14,95:1 | AAA |
| texto suave sobre o fundo | 10,03:1 | AAA |
| marca sobre o fundo | 8,35:1 | AAA |
| texto sobre a marca | 8,35:1 | AAA |
| texto sobre a superfície | 13,03:1 | AAA |
| produtor do cartão (texto suave sobre a superfície) | 8,74:1 | AAA |
| título do cartão (marca sobre a superfície) | 7,27:1 | AAA |
| `--cor-foco` sobre o fundo / sobre a superfície | 9,21:1 / 8,02:1 | passa (régua de 3:1) |
| `--cor-marca-forte` com o texto sobre a marca | 11,48:1 | AAA |

O par mais apertado é a marca sobre a superfície (7,27:1): no escuro a superfície é mais clara que o fundo. **Nenhuma regra das peças precisou mudar** porque todas as cores delas vêm de `var(--cor-…)`: o bloco `@media (prefers-color-scheme: dark)` só dá outros valores aos mesmos nomes, e o `color-scheme` faz os campos e a barra de rolagem acompanharem o tema. As fotos não mudam.

### Item 5 — As camadas

- **A ordem, da mais fraca para a mais forte:** `reset`, `base`, `componentes`, `utilitarios` (declarada no `camadas.css`, que vem primeiro no `head`).
- **Uma regra em cada uma das três primeiras:** `* { margin: 0 }` em `reset`; `:focus-visible { outline: … }` (o anel) em `base`; `.cartao-produto { container-type: inline-size; … }` em `componentes`.
- **A convenção de nomes:** o componente vem antes do nome da parte, como em `.cartao-produto .preco` e `.tabela-safra thead th`.
- **Uma repetição juntada:** os botões da lupa, do cadastro, das categorias e dos cartões, que eram regras separadas, ficaram numa só, com um só `:hover`.
- **Uma regra que mudaria de resultado sem as camadas:** o `reset.css`. Se o `@layer reset { … }` não envolvesse o arquivo, o `* { margin: 0 }` ficaria fora de camada e venceria todas as camadas, qualquer que fosse a especificidade: o `h2` do catálogo, que tem `margin-top` de 32 px, passaria a ter 0. Com o invólucro, o reset é a camada mais fraca e as margens de `base` e `componentes` valem. (O `casos.css` da Atividade 3 é o outro caso: fora de camada venceria tudo, e por isso sai do `head`.)
- **Como se conferiu que o resto ficou igual:** comparando a aparência da versão em um arquivo só com a das camadas, nas cinco páginas, em 360, 1024 e 1920 px e nos dois temas, sem diferença.

### O validador

Nas cinco páginas, o Nu Html Checker (o motor do validador do W3C) não aponta nenhuma mensagem: as linhas novas do `head` e o item novo do menu não trouxeram erro.
