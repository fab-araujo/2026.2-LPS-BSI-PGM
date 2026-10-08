# Aula 4 — O cartão que se adapta ao espaço, não à janela

A aula 4 foi a distância: a **apostila**, no SIGAA, faz o papel da aula, e esta pasta guarda os exemplos que ela cita.

Uma pasta:

- `exemplos/` — os exemplos da apostila, na ordem em que aparecem nela.

## `exemplos/`

Cada exemplo é uma **pasta** com um documento completo: o `index.html` e as folhas que ele liga — `reset.css`, `tokens.css` e `estilo.css`, e as imagens que usa. Entre na pasta e clique no arquivo: o GitHub mostra o código na própria página. É o mesmo código da apostila.

Cada pasta também abre no navegador, já com o estilo, no endereço do GitHub Pages deste repositório: <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula04/exemplos/> abre a lista com um link para cada exemplo, e um clique no nome abre a página. Com o F12 aberto, dá para ver no painel o que a figura da apostila mostrou. Para ver o layout mudar, **estreite e alargue a janela**.

Estes exemplos são para **ler e mexer**, não para copiar: no seu `agrofeira-<seu-usuário>` vai só o que você escrever.

| Pasta | O que mostra |
|---|---|
| [`01-sem-estado`](exemplos/01-sem-estado/) | O cartão da aula 3, sem estados: o ponteiro sobre o botão não muda nada. |
| [`02-hover`](exemplos/02-hover/) | `:hover` no botão; token `--cor-marca-forte`. Serve também para o anel de fábrica (Tab). |
| [`03-borda-contorno`](exemplos/03-borda-contorno/) | Três cartões: `border: 4px`, `outline: 4px`, `outline` + `outline-offset`; token `--cor-foco`. |
| [`04-sem-contorno`](exemplos/04-sem-contorno/) | `outline: none` (o desastre): Tab sem nenhum sinal de foco. |
| [`05-focus`](exemplos/05-focus/) | Anel com `:focus` (aparece também no clique). |
| [`06-focus-visible`](exemplos/06-focus-visible/) | Anel com `:focus-visible` (só no teclado). |
| [`07-desligado`](exemplos/07-desligado/) | Atributo `disabled` sem estilo: botão desligado igual ao ativo, escurece no `:hover`; Tab o pula. |
| [`08-disabled`](exemplos/08-disabled/) | `:disabled` DEPOIS do `:hover` (certo); exemplo final, também usado nas capturas do F12. |
| [`09-disabled-ordem`](exemplos/09-disabled-ordem/) | `:disabled` ANTES do `:hover` (o desligado escurece com o ponteiro). |
| [`10-foco-global`](exemplos/10-foco-global/) | (1.8) `:focus-visible` sem seletor de tipo (anel de 2 px para link, `select`, `textarea`, botão) + `.cabecalho-site :focus-visible { outline-color }` (o anel azul some sobre o verde da marca: 1,04:1; o branco dá 6,4:1). |
| [`11-formulario`](exemplos/11-formulario/) | Um formulário como o do cadastro da aula 2, com nome, e-mail, telefone e CEP, cada campo num `<p>` com o seu `<label>`, no estilo da aula 3 e sem nenhuma pseudo-classe de estado. |
| [`12-invalid`](exemplos/12-invalid/) | `input:invalid`: nome e e-mail já vermelhos ao abrir a página; token `--cor-erro`. |
| [`13-user-invalid`](exemplos/13-user-invalid/) | O `:user-invalid` e o `:user-valid` (este só nos campos obrigatórios): a página abre limpa, e as cores só aparecem depois que a pessoa altera um campo e sai dele, ou quando tenta enviar o formulário. |
| [`14-has-grupo`](exemplos/14-has-grupo/) | `p:has(input:user-invalid)`: cor de erro no texto e contorno (`outline`) na linha inteira. |
| [`15-has-cartao`](exemplos/15-has-cartao/) | `.cartao-produto:has(button:focus-visible)`: contorno no cartão cujo botão tem o foco (açaí, cupuaçu e banana: a farinha ficou de fora porque está esgotada no cap. 1). |
| [`16-antes`](exemplos/16-antes/) | O catálogo com um cartão (estilo da aula 3 + estados do cap. 1), sem tema escuro: igual nos dois temas do sistema. |
| [`17-tema-escuro`](exemplos/17-tema-escuro/) | O mesmo, com o bloco `@media (prefers-color-scheme: dark)` no fim do `tokens.css`; o `estilo.css` é o do exemplo anterior. |
| [`18-campos`](exemplos/18-campos/) | O mesmo, com `:root { color-scheme: light dark; }` num bloco próprio no fim do `tokens.css`. |
| [`19-campos-antes`](exemplos/19-campos-antes/) | Formulário de cadastro no tema escuro, sem `color-scheme`: campos, botão e barra de rolagem claros. |
| [`20-esquecido`](exemplos/20-esquecido/) | O tema escuro sem o token `--cor-texto-suave`: o texto suave fica 2,14:1 sobre a superfície escura (reprova). |
| [`21-antes`](exemplos/21-antes/) | O título com `--tamanho-h1: 2.25rem` (aula 3): 36 px em toda janela. |
| [`22-vw`](exemplos/22-vw/) | `--tamanho-h1: 5vw`: 18 px em 360, 38,4 em 768, 64 em 1280; ignora o tamanho de letra do Chrome e o zoom. |
| [`23-clamp-vw`](exemplos/23-clamp-vw/) | `clamp(1.75rem, 5vw, 3rem)`: limites em 28 e 48 px; o ideal em `vw` ainda só olha para a janela. |
| [`24-clamp`](exemplos/24-clamp/) | `clamp(1.75rem, 1rem + 3vw, 3rem)`: a soma de `rem` e `vw`; acompanha janela, tamanho de letra e zoom. |
| [`25-antes`](exemplos/25-antes/) | Ponto de partida (aula 3): cabeçalho empilhado, busca, categorias e cartão, sem flex. |
| [`26-menu-flex`](exemplos/26-menu-flex/) | `display: flex` no menu: itens em fileira, colados. |
| [`27-menu-gap`](exemplos/27-menu-gap/) | O mesmo menu com `gap`. |
| [`28-cabecalho-entre`](exemplos/28-cabecalho-entre/) | `justify-content: space-between` no cabeçalho. |
| [`29-justify-content`](exemplos/29-justify-content/) | Vitrine dos seis valores de `justify-content` (faixas com itens tracejados). |
| [`30-cabecalho-centro`](exemplos/30-cabecalho-centro/) | `align-items: center` no cabeçalho (também o "sem flex-wrap" em 360 px). |
| [`31-cartao-coluna`](exemplos/31-cartao-coluna/) | `flex-direction: column` no cartão; o botão estica (`stretch`). |
| [`32-cartao-margens`](exemplos/32-cartao-margens/) | O cartão em coluna com as duas margens da aula 3 mantidas: o espaço dobra (16 px em vez de 8). |
| [`33-cartao-alinhado`](exemplos/33-cartao-alinhado/) | O mesmo cartão com `align-items: flex-start`. |
| [`34-filtros`](exemplos/34-filtros/) | Barra de categorias flex com `gap`, sem quebra (estoura em 360 px). |
| [`35-filtros-quebra`](exemplos/35-filtros-quebra/) | A barra com `flex-wrap: wrap`. |
| [`36-cabecalho-quebra`](exemplos/36-cabecalho-quebra/) | Cabeçalho e menu com `flex-wrap: wrap` (menu abaixo do nome em 360 px). |
| [`37-busca-flex`](exemplos/37-busca-flex/) | Busca como contêiner flex com quebra; rótulo com `width: 100%`. |
| [`38-busca-resto`](exemplos/38-busca-resto/) | Busca com `flex: 1` no campo. |
| [`39-pagina`](exemplos/39-pagina/) | A página inteira com Flexbox (inclui `main` em coluna). |
| [`40-colunas-px`](exemplos/40-colunas-px/) | `display: grid` + `grid-template-columns: 220px 220px 220px` (sem gap, com sobra à direita). |
| [`41-fr`](exemplos/41-fr/) | `1fr 1fr 1fr` (acompanha a janela; estoura em 360 px pelo mínimo do conteúdo). |
| [`42-auto-fill`](exemplos/42-auto-fill/) | `repeat(auto-fill, minmax(14rem, 1fr))`: 1, 3 e 5 colunas em 360, 800 e 1280 px, sem `@media`. |
| [`43-destaque`](exemplos/43-destaque/) | `grid-column: 1 / 3` e `grid-row: 1 / 3` num cartão. |
| [`44-span`](exemplos/44-span/) | `grid-column: span 2` e `grid-row: span 2` (o cartão fica onde a ordem do HTML o põe; estoura em 360 px). |
| [`45-destaque-fileira`](exemplos/45-destaque-fileira/) | O destaque do site: o cacau como primeiro cartão, com `grid-column: 1 / -1`, ocupa a fileira inteira com qualquer número de colunas. |
| [`46-casca-antes`](exemplos/46-casca-antes/) | A página com as seis peças, sem layout (tudo empilhado). |
| [`47-casca`](exemplos/47-casca/) | `grid-template-areas` + `grid-area` na casca (pular, cabeçalho, menu, conteúdo, lateral, rodapé). |
| [`48-criterio`](exemplos/48-criterio/) | O mesmo menu em Flexbox (`display: flex`, do capítulo 5) e em Grid, com quatro colunas iguais de 8rem. |
| [`49-sem-meta`](exemplos/49-sem-meta/) | A página sem a linha `meta viewport`: no celular o layout vira 980 px, encolhido a 40%. |
| [`50-base`](exemplos/50-base/) | A mesma página com a linha: a casca de base em uma coluna (áreas empilhadas), com `grid-template-columns: minmax(0, 1fr)`. |
| [`51-sem-ponto`](exemplos/51-sem-ponto/) | A casca de três áreas do capítulo 6 sem condição: a página tem 672 px e rola de lado em janela menor. |
| [`52-casca`](exemplos/52-casca/) | A base + `@media (min-width: 42rem)` com as três áreas e `10rem minmax(0, 1fr) 14rem`. |
| [`53-estoura`](exemplos/53-estoura/) | Aviso com `width: 400px`: a página tem 416 px numa janela de 320. |
| [`54-estoura-corrigido`](exemplos/54-estoura-corrigido/) | O mesmo aviso com `max-width: 400px`: a página tem 320 px. |
| [`55-sizes`](exemplos/55-sizes/) | O catálogo (uma coluna; três a partir de 46rem) com `srcset` 320w/480w/640w e `sizes="(min-width: 46rem) 33vw, 100vw"`. |
| [`56-sizes-100vw`](exemplos/56-sizes-100vw/) | O mesmo catálogo com `sizes="100vw"`, para comparar. |
| [`57-antes`](exemplos/57-antes/) | A tabela solta: em 320 px a página tem 455 px (a tabela, 439) e rola inteira de lado. |
| [`58-rolagem`](exemplos/58-rolagem/) | A tabela dentro de `<div class="rolagem-tabela">` com `overflow-x: auto`: só a tabela rola, a página fica com 320 px. |
| [`59-casca-antes`](exemplos/59-casca-antes/) | A tabela dentro da casca do capítulo 7, com a coluna `auto` (sem o `grid-template-columns`): em 320 px a página tem 471 px e o invólucro (439 px) não rola. |
| [`60-casca`](exemplos/60-casca/) | A mesma página com `minmax(0, 1fr)`: a página tem 320 px e o invólucro rola (288 de 439). |
| [`61-tabindex`](exemplos/61-tabindex/) | O invólucro com `tabindex="0"` (Tab e setas). |
| [`62-regiao`](exemplos/62-regiao/) | Com `role="region"` e `aria-label="Calendário de safra"`. |
| [`63-foco`](exemplos/63-foco/) | Com o foco visível: `:focus-visible`, `outline: 3px solid var(--cor-foco)`, `outline-offset: 3px` (o anel do capítulo 1). |
| [`64-tres-lugares`](exemplos/64-tres-lugares/) | O ponto de partida, o cartão em coluna na grade (224 px), na barra lateral (256 px) e em destaque (704 px), em janela de 1024 px. |
| [`65-media-erra`](exemplos/65-media-erra/) | O cartão deitado por `@media (min-width: 60rem)`: deita o destaque (certo) e deforma a grade e a barra lateral (texto passa do cartão; documento de 1054 px em janela de 1024). |
| [`66-conteiner`](exemplos/66-conteiner/) | Só `container-type: inline-size` no `li`; a tela não muda, o F12 mostra o selo e o contorno. |
| [`67-regra-no-li`](exemplos/67-regra-no-li/) | `@container (min-width: 26rem)` com a regra escrita sobre o próprio `li` (o contêiner): a regra do `li` não vale em lugar nenhum; as da `img` e do `button` valem no destaque (contêiner = o `li`), mas sem a grade não fazem nada. |
| [`68-cartao-deitado`](exemplos/68-cartao-deitado/) | O `<article>` dentro do `li` e a regra sobre `.cartao-produto article`: deita só o destaque (670 px de conteúdo); em 800 px a barra lateral, que desce e fica larga (734 px), também deita. |
| [`69-selo-fluxo`](exemplos/69-selo-fluxo/) | O selo "Safra nova" (açaí e cacau) no fluxo normal: uma faixa entre a foto e o título. |
| [`70-selo-relative`](exemplos/70-selo-relative/) | `position: relative` com `top`/`left` de 1,5rem: o selo se desloca, o espaço dele continua reservado. |
| [`71-selo-absolute`](exemplos/71-selo-absolute/) | `position: absolute` sem referência: os dois selos vão para o canto da página, um sobre o outro (ambos em 8,8 px). |
| [`72-selo`](exemplos/72-selo/) | `article { position: relative }` + selo absoluto: o selo sobre o canto da foto. |
| [`73-selo-direita`](exemplos/73-selo-direita/) | O mesmo selo no canto direito, com `inset: 0.5rem 0.5rem auto auto`. |
| [`74-sticky`](exemplos/74-sticky/) | Cabeçalho `sticky; top: 0` sem `z-index`: a foto e o selo do cartão passam por cima dele. |
| [`75-zindex`](exemplos/75-zindex/) | O cabeçalho com `z-index: 1`. |
| [`76-pular-none`](exemplos/76-pular-none/) | Link de pular com `display: none` (o jeito errado: o primeiro Tab vai para "Início"). |
| [`77-pular`](exemplos/77-pular/) | O mesmo com `z-index: 2`: aparece por cima do cabeçalho. |
| [`78-casca-pular`](exemplos/78-casca-pular/) | A casca dos capítulos 6/7 (menu fora do cabeçalho, lateral) com o link de pular `absolute` e a linha `pular` ainda no desenho: o cabeçalho fica a 16 px do alto. |
| [`79-casca-pular-sem-linha`](exemplos/79-casca-pular-sem-linha/) | A mesma casca sem a linha `pular` nem a regra `.pular { grid-area }`: cabeçalho a 0 px. |
| [`80-ancora`](exemplos/80-ancora/) | `html { scroll-padding-top: 7rem }`: o salto do link de pular não esconde o título atrás do cabeçalho. |
| [`81-sticky-altura`](exemplos/81-sticky-altura/) | `position: sticky`, `z-index` e `scroll-padding-top` dentro de `@media (min-height: 30rem)`. |
| [`82-transicao`](exemplos/82-transicao/) | `transition: background-color 200ms ease-out` no botão do cartão. |
| [`83-translate`](exemplos/83-translate/) | `.cartao-produto:hover { transform: translateY(-0.5rem) }`, sem transição (instantâneo). |
| [`84-scale`](exemplos/84-scale/) | `transform: scale(1.05)` no `:hover`, sem transição. |
| [`85-cartao-sobe`](exemplos/85-cartao-sobe/) | `transition: transform 200ms ease-out` + `:hover` e `:has(button:focus-visible)` subindo o cartão. |
| [`86-curvas`](exemplos/86-curvas/) | Cinco barras (`linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`), `translateX(6rem)` em 1 s, ao passar o ponteiro na lista (página própria). |
| [`87-movimento`](exemplos/87-movimento/) | Transição de `transform` e `border-color`, borda verde no destaque, e `@media (prefers-reduced-motion: reduce)` com `transform: none`. |
| [`88-id-sem-camada`](exemplos/88-id-sem-camada/) | O problema: `#colheita` (id) vence `.aviso` (classe) mesmo vindo antes; o aviso fica vermelho. |
| [`89-id-camada`](exemplos/89-id-camada/) | As mesmas regras em `@layer base, componentes;`: o id na camada `base` perde para a classe em `componentes`. |
| [`90-id-fora`](exemplos/90-id-fora/) | O mesmo, com a regra do id fora de qualquer camada: o id volta a vencer (camada implícita). |
| [`91-site-camadas`](exemplos/91-site-camadas/) | A AgroFeira em seis arquivos de CSS (`camadas.css`, `reset.css`, `tokens.css`, `base.css`, `componentes.css`, `utilitarios.css`), head com seis `link`, utilitário `.texto-erro`. |
| [`92-reset-fora`](exemplos/92-reset-fora/) | O mesmo site com o `reset.css` sem o invólucro `@layer reset { }`: o `margin: 0` solto apaga as margens. |
| [`93-site-antes`](exemplos/93-site-antes/) | O mesmo site num só `estilo.css`, sem camadas (derivado dos arquivos em camadas): o utilitário perde para `.cartao-produto .estoque` (0-2-0 contra 0-1-0). |
| [`94-site-completo`](exemplos/94-site-completo/) | O site dos capítulos 1 a 11 em camadas: casca em grade e `@media (min-width: 42rem)` em `base`, `@container`, `.selo`, `.pular`, `.rolagem-tabela`, estados, transições e `@media (prefers-reduced-motion)` em `componentes`, `.texto-erro` em `utilitarios`; `nav :focus-visible` na exceção do anel; cabeçalho grudado dentro de `@media (min-height: 30rem)`, com o `scroll-padding-top`. |
| [`95-subgrid`](exemplos/95-subgrid/) | `grid-row: span 5` + `grid-template-rows: subgrid` no `li` e no `article`; preços e botões alinhados. |

## Fotos

As fotos dos produtos vêm do Wikimedia Commons, recortadas; os créditos estão no fim da apostila. Os nomes de produtores e sítios nos cartões são fictícios.
