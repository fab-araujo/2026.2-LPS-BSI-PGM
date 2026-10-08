# Aula 4 — os exemplos

Clique no nome de um exemplo. No site da disciplina (GitHub Pages), ele abre já com o estilo, e o F12 mostra no painel o que a figura da apostila mostrou; para ver o layout mudar, estreite e alargue a janela. Aqui no GitHub, abre a pasta com o código.

O que é a aula e como usar os exemplos está no [README da aula](../).

| Exemplo | O que mostra |
|---|---|
| [01-sem-estado](01-sem-estado/) | O cartão da aula 3, sem estados: o ponteiro sobre o botão não muda nada. |
| [02-hover](02-hover/) | `:hover` no botão; token `--cor-marca-forte`. Serve também para o anel de fábrica (Tab). |
| [03-borda-contorno](03-borda-contorno/) | Três cartões: `border: 4px`, `outline: 4px`, `outline` + `outline-offset`; token `--cor-foco`. |
| [04-sem-contorno](04-sem-contorno/) | `outline: none` (o desastre): Tab sem nenhum sinal de foco. |
| [05-focus](05-focus/) | Anel com `:focus` (aparece também no clique). |
| [06-focus-visible](06-focus-visible/) | Anel com `:focus-visible` (só no teclado). |
| [07-desligado](07-desligado/) | Atributo `disabled` sem estilo: botão desligado igual ao ativo, escurece no `:hover`; Tab o pula. |
| [08-disabled](08-disabled/) | `:disabled` DEPOIS do `:hover` (certo); exemplo final, também usado nas capturas do F12. |
| [09-disabled-ordem](09-disabled-ordem/) | `:disabled` ANTES do `:hover` (o desligado escurece com o ponteiro). |
| [10-foco-global](10-foco-global/) | (1.8) `:focus-visible` sem seletor de tipo (anel de 2 px para link, `select`, `textarea`, botão) + `.cabecalho-site :focus-visible { outline-color }` (o anel azul some sobre o verde da marca: 1,04:1; o branco dá 6,4:1). |
| [11-formulario](11-formulario/) | Um formulário como o do cadastro da aula 2, com nome, e-mail, telefone e CEP, cada campo num `<p>` com o seu `<label>`, no estilo da aula 3 e sem nenhuma pseudo-classe de estado. |
| [12-invalid](12-invalid/) | `input:invalid`: nome e e-mail já vermelhos ao abrir a página; token `--cor-erro`. |
| [13-user-invalid](13-user-invalid/) | O `:user-invalid` e o `:user-valid` (este só nos campos obrigatórios): a página abre limpa, e as cores só aparecem depois que a pessoa altera um campo e sai dele, ou quando tenta enviar o formulário. |
| [14-has-grupo](14-has-grupo/) | `p:has(input:user-invalid)`: cor de erro no texto e contorno (`outline`) na linha inteira. |
| [15-has-cartao](15-has-cartao/) | `.cartao-produto:has(button:focus-visible)`: contorno no cartão cujo botão tem o foco (açaí, cupuaçu e banana: a farinha ficou de fora porque está esgotada no cap. 1). |
| [16-antes](16-antes/) | O catálogo com um cartão (estilo da aula 3 + estados do cap. 1), sem tema escuro: igual nos dois temas do sistema. |
| [17-tema-escuro](17-tema-escuro/) | O mesmo, com o bloco `@media (prefers-color-scheme: dark)` no fim do `tokens.css`; o `estilo.css` é o do exemplo anterior. |
| [18-campos](18-campos/) | O mesmo, com `:root { color-scheme: light dark; }` num bloco próprio no fim do `tokens.css`. |
| [19-campos-antes](19-campos-antes/) | Formulário de cadastro no tema escuro, sem `color-scheme`: campos, botão e barra de rolagem claros. |
| [20-esquecido](20-esquecido/) | O tema escuro sem o token `--cor-texto-suave`: o texto suave fica 2,14:1 sobre a superfície escura (reprova). |
| [21-antes](21-antes/) | O título com `--tamanho-h1: 2.25rem` (aula 3): 36 px em toda janela. |
| [22-vw](22-vw/) | `--tamanho-h1: 5vw`: 18 px em 360, 38,4 em 768, 64 em 1280; ignora o tamanho de letra do Chrome e o zoom. |
| [23-clamp-vw](23-clamp-vw/) | `clamp(1.75rem, 5vw, 3rem)`: limites em 28 e 48 px; o ideal em `vw` ainda só olha para a janela. |
| [24-clamp](24-clamp/) | `clamp(1.75rem, 1rem + 3vw, 3rem)`: a soma de `rem` e `vw`; acompanha janela, tamanho de letra e zoom. |
| [25-antes](25-antes/) | Ponto de partida (aula 3): cabeçalho empilhado, busca, categorias e cartão, sem flex. |
| [26-menu-flex](26-menu-flex/) | `display: flex` no menu: itens em fileira, colados. |
| [27-menu-gap](27-menu-gap/) | O mesmo menu com `gap`. |
| [28-cabecalho-entre](28-cabecalho-entre/) | `justify-content: space-between` no cabeçalho. |
| [29-justify-content](29-justify-content/) | Vitrine dos seis valores de `justify-content` (faixas com itens tracejados). |
| [30-cabecalho-centro](30-cabecalho-centro/) | `align-items: center` no cabeçalho (também o "sem flex-wrap" em 360 px). |
| [31-cartao-coluna](31-cartao-coluna/) | `flex-direction: column` no cartão; o botão estica (`stretch`). |
| [32-cartao-margens](32-cartao-margens/) | O cartão em coluna com as duas margens da aula 3 mantidas: o espaço dobra (16 px em vez de 8). |
| [33-cartao-alinhado](33-cartao-alinhado/) | O mesmo cartão com `align-items: flex-start`. |
| [34-filtros](34-filtros/) | Barra de categorias flex com `gap`, sem quebra (estoura em 360 px). |
| [35-filtros-quebra](35-filtros-quebra/) | A barra com `flex-wrap: wrap`. |
| [36-cabecalho-quebra](36-cabecalho-quebra/) | Cabeçalho e menu com `flex-wrap: wrap` (menu abaixo do nome em 360 px). |
| [37-busca-flex](37-busca-flex/) | Busca como contêiner flex com quebra; rótulo com `width: 100%`. |
| [38-busca-resto](38-busca-resto/) | Busca com `flex: 1` no campo. |
| [39-pagina](39-pagina/) | A página inteira com Flexbox (inclui `main` em coluna). |
| [40-colunas-px](40-colunas-px/) | `display: grid` + `grid-template-columns: 220px 220px 220px` (sem gap, com sobra à direita). |
| [41-fr](41-fr/) | `1fr 1fr 1fr` (acompanha a janela; estoura em 360 px pelo mínimo do conteúdo). |
| [42-auto-fill](42-auto-fill/) | `repeat(auto-fill, minmax(14rem, 1fr))`: 1, 3 e 5 colunas em 360, 800 e 1280 px, sem `@media`. |
| [43-destaque](43-destaque/) | `grid-column: 1 / 3` e `grid-row: 1 / 3` num cartão. |
| [44-span](44-span/) | `grid-column: span 2` e `grid-row: span 2` (o cartão fica onde a ordem do HTML o põe; estoura em 360 px). |
| [45-destaque-fileira](45-destaque-fileira/) | O destaque do site: o cacau como primeiro cartão, com `grid-column: 1 / -1`, ocupa a fileira inteira com qualquer número de colunas. |
| [46-casca-antes](46-casca-antes/) | A página com as seis peças, sem layout (tudo empilhado). |
| [47-casca](47-casca/) | `grid-template-areas` + `grid-area` na casca (pular, cabeçalho, menu, conteúdo, lateral, rodapé). |
| [48-criterio](48-criterio/) | O mesmo menu em Flexbox (`display: flex`, do capítulo 5) e em Grid, com quatro colunas iguais de 8rem. |
| [49-sem-meta](49-sem-meta/) | A página sem a linha `meta viewport`: no celular o layout vira 980 px, encolhido a 40%. |
| [50-base](50-base/) | A mesma página com a linha: a casca de base em uma coluna (áreas empilhadas), com `grid-template-columns: minmax(0, 1fr)`. |
| [51-sem-ponto](51-sem-ponto/) | A casca de três áreas do capítulo 6 sem condição: a página tem 672 px e rola de lado em janela menor. |
| [52-casca](52-casca/) | A base + `@media (min-width: 42rem)` com as três áreas e `10rem minmax(0, 1fr) 14rem`. |
| [53-estoura](53-estoura/) | Aviso com `width: 400px`: a página tem 416 px numa janela de 320. |
| [54-estoura-corrigido](54-estoura-corrigido/) | O mesmo aviso com `max-width: 400px`: a página tem 320 px. |
| [55-sizes](55-sizes/) | O catálogo (uma coluna; três a partir de 46rem) com `srcset` 320w/480w/640w e `sizes="(min-width: 46rem) 33vw, 100vw"`. |
| [56-sizes-100vw](56-sizes-100vw/) | O mesmo catálogo com `sizes="100vw"`, para comparar. |
| [57-antes](57-antes/) | A tabela solta: em 320 px a página tem 455 px (a tabela, 439) e rola inteira de lado. |
| [58-rolagem](58-rolagem/) | A tabela dentro de `<div class="rolagem-tabela">` com `overflow-x: auto`: só a tabela rola, a página fica com 320 px. |
| [59-casca-antes](59-casca-antes/) | A tabela dentro da casca do capítulo 7, com a coluna `auto` (sem o `grid-template-columns`): em 320 px a página tem 471 px e o invólucro (439 px) não rola. |
| [60-casca](60-casca/) | A mesma página com `minmax(0, 1fr)`: a página tem 320 px e o invólucro rola (288 de 439). |
| [61-tabindex](61-tabindex/) | O invólucro com `tabindex="0"` (Tab e setas). |
| [62-regiao](62-regiao/) | Com `role="region"` e `aria-label="Calendário de safra"`. |
| [63-foco](63-foco/) | Com o foco visível: `:focus-visible`, `outline: 3px solid var(--cor-foco)`, `outline-offset: 3px` (o anel do capítulo 1). |
| [64-tres-lugares](64-tres-lugares/) | O ponto de partida, o cartão em coluna na grade (224 px), na barra lateral (256 px) e em destaque (704 px), em janela de 1024 px. |
| [65-media-erra](65-media-erra/) | O cartão deitado por `@media (min-width: 60rem)`: deita o destaque (certo) e deforma a grade e a barra lateral (texto passa do cartão; documento de 1054 px em janela de 1024). |
| [66-conteiner](66-conteiner/) | Só `container-type: inline-size` no `li`; a tela não muda, o F12 mostra o selo e o contorno. |
| [67-regra-no-li](67-regra-no-li/) | `@container (min-width: 26rem)` com a regra escrita sobre o próprio `li` (o contêiner): a regra do `li` não vale em lugar nenhum; as da `img` e do `button` valem no destaque (contêiner = o `li`), mas sem a grade não fazem nada. |
| [68-cartao-deitado](68-cartao-deitado/) | O `<article>` dentro do `li` e a regra sobre `.cartao-produto article`: deita só o destaque (670 px de conteúdo); em 800 px a barra lateral, que desce e fica larga (734 px), também deita. |
| [69-selo-fluxo](69-selo-fluxo/) | O selo "Safra nova" (açaí e cacau) no fluxo normal: uma faixa entre a foto e o título. |
| [70-selo-relative](70-selo-relative/) | `position: relative` com `top`/`left` de 1,5rem: o selo se desloca, o espaço dele continua reservado. |
| [71-selo-absolute](71-selo-absolute/) | `position: absolute` sem referência: os dois selos vão para o canto da página, um sobre o outro (ambos em 8,8 px). |
| [72-selo](72-selo/) | `article { position: relative }` + selo absoluto: o selo sobre o canto da foto. |
| [73-selo-direita](73-selo-direita/) | O mesmo selo no canto direito, com `inset: 0.5rem 0.5rem auto auto`. |
| [74-sticky](74-sticky/) | Cabeçalho `sticky; top: 0` sem `z-index`: a foto e o selo do cartão passam por cima dele. |
| [75-zindex](75-zindex/) | O cabeçalho com `z-index: 1`. |
| [76-pular-none](76-pular-none/) | Link de pular com `display: none` (o jeito errado: o primeiro Tab vai para "Início"). |
| [77-pular](77-pular/) | O mesmo com `z-index: 2`: aparece por cima do cabeçalho. |
| [78-casca-pular](78-casca-pular/) | A casca dos capítulos 6/7 (menu fora do cabeçalho, lateral) com o link de pular `absolute` e a linha `pular` ainda no desenho: o cabeçalho fica a 16 px do alto. |
| [79-casca-pular-sem-linha](79-casca-pular-sem-linha/) | A mesma casca sem a linha `pular` nem a regra `.pular { grid-area }`: cabeçalho a 0 px. |
| [80-ancora](80-ancora/) | `html { scroll-padding-top: 7rem }`: o salto do link de pular não esconde o título atrás do cabeçalho. |
| [81-sticky-altura](81-sticky-altura/) | `position: sticky`, `z-index` e `scroll-padding-top` dentro de `@media (min-height: 30rem)`. |
| [82-transicao](82-transicao/) | `transition: background-color 200ms ease-out` no botão do cartão. |
| [83-translate](83-translate/) | `.cartao-produto:hover { transform: translateY(-0.5rem) }`, sem transição (instantâneo). |
| [84-scale](84-scale/) | `transform: scale(1.05)` no `:hover`, sem transição. |
| [85-cartao-sobe](85-cartao-sobe/) | `transition: transform 200ms ease-out` + `:hover` e `:has(button:focus-visible)` subindo o cartão. |
| [86-curvas](86-curvas/) | Cinco barras (`linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`), `translateX(6rem)` em 1 s, ao passar o ponteiro na lista (página própria). |
| [87-movimento](87-movimento/) | Transição de `transform` e `border-color`, borda verde no destaque, e `@media (prefers-reduced-motion: reduce)` com `transform: none`. |
| [88-id-sem-camada](88-id-sem-camada/) | O problema: `#colheita` (id) vence `.aviso` (classe) mesmo vindo antes; o aviso fica vermelho. |
| [89-id-camada](89-id-camada/) | As mesmas regras em `@layer base, componentes;`: o id na camada `base` perde para a classe em `componentes`. |
| [90-id-fora](90-id-fora/) | O mesmo, com a regra do id fora de qualquer camada: o id volta a vencer (camada implícita). |
| [91-site-camadas](91-site-camadas/) | A AgroFeira em seis arquivos de CSS (`camadas.css`, `reset.css`, `tokens.css`, `base.css`, `componentes.css`, `utilitarios.css`), head com seis `link`, utilitário `.texto-erro`. |
| [92-reset-fora](92-reset-fora/) | O mesmo site com o `reset.css` sem o invólucro `@layer reset { }`: o `margin: 0` solto apaga as margens. |
| [93-site-antes](93-site-antes/) | O mesmo site num só `estilo.css`, sem camadas (derivado dos arquivos em camadas): o utilitário perde para `.cartao-produto .estoque` (0-2-0 contra 0-1-0). |
| [94-site-completo](94-site-completo/) | O site dos capítulos 1 a 11 em camadas: casca em grade e `@media (min-width: 42rem)` em `base`, `@container`, `.selo`, `.pular`, `.rolagem-tabela`, estados, transições e `@media (prefers-reduced-motion)` em `componentes`, `.texto-erro` em `utilitarios`; `nav :focus-visible` na exceção do anel; cabeçalho grudado dentro de `@media (min-height: 30rem)`, com o `scroll-padding-top`. |
| [95-subgrid](95-subgrid/) | `grid-row: span 5` + `grid-template-rows: subgrid` no `li` e no `article`; preços e botões alinhados. |
