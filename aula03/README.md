# Aula 3 — CSS que você controla

Três pastas:

- `exemplos/` — os exemplos mostrados em sala, na ordem em que apareceram nos slides;
- `inicio/` — o `reset.css`, pronto, a folha que a Atividade 3 liga antes das suas;
- [`solucao_atividade_aula03/`](solucao_atividade_aula03/) — ⚠️ **a solução da Atividade 3**, publicada depois do prazo de entrega.

## `exemplos/`

Cada exemplo é uma **pasta** com um documento completo: o `index.html` e as folhas que ele liga. As folhas entram na ordem dos slides: o `estilo.css` a partir do exemplo 03; o `reset.css` a partir do bloco do reset — nos exemplos 38 a 42, só com o bloco que o slide mostra; do 43 em diante, a folha inteira —; e o `tokens.css` a partir do bloco dos tokens, no 57. Entre na pasta e clique no arquivo: o GitHub mostra o código na própria página. É o mesmo código do slide; fora do reset dos exemplos 38 a 42, quando o slide mostra só um trecho de uma folha, a pasta tem a folha inteira.

Cada pasta também abre no navegador, já com o estilo, no endereço do GitHub Pages deste repositório: `https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula03/exemplos/` seguido do nome da pasta — por exemplo, <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula03/exemplos/03-primeira-regra/>. A lista com um link para cada exemplo está em <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula03/exemplos/>. Com o F12 aberto nessa página, dá para ver no painel de estilos tudo o que o slide mostrou.

Estes exemplos são para **ler**, não para copiar: no seu `agrofeira-<seu-usuário>` vai só o que você escrever.

| Pasta | O que mostra |
|---|---|
| [`01-estilo-padrao`](exemplos/01-estilo-padrao/) | Uma página sem nenhuma linha de CSS: o título grande, o link azul e as bolinhas vêm da folha padrão do navegador. |
| [`02-classes-sem-efeito`](exemplos/02-classes-sem-efeito/) | As classes da AgroFeira no HTML. Sem CSS, elas não mudam nada na tela. |
| [`03-primeira-regra`](exemplos/03-primeira-regra/) | O documento completo com a linha `<link rel="stylesheet">` no `head` e uma regra só: o `h1` fica verde. |
| [`04-varias-declaracoes`](exemplos/04-varias-declaracoes/) | Uma regra com três declarações: cor do texto, cor do fundo e tamanho da letra. |
| [`05-erro-ignorado`](exemplos/05-erro-ignorado/) | Um nome de propriedade errado e um ponto e vírgula esquecido: o navegador ignora as três declarações, sem mensagem de erro. |
| [`06-comentario`](exemplos/06-comentario/) | Um comentário `/* ... */` antes da regra. Ele não aparece na tela. |
| [`07-style-inline`](exemplos/07-style-inline/) | A tag `<style>` e o atributo `style`: funcionam, e não se usam na AgroFeira. |
| [`08-seletor-tipo`](exemplos/08-seletor-tipo/) | `li` pinta todos os itens — os do menu junto com os produtos. |
| [`09-seletor-classe`](exemplos/09-seletor-classe/) | `.cartao-produto` pinta só os itens que têm a classe. |
| [`10-duas-classes`](exemplos/10-duas-classes/) | Um elemento com duas classes recebe o que as duas regras dizem. |
| [`11-composto`](exemplos/11-composto/) | `p.aviso`: o parágrafo com a classe `aviso`, e não o título que também tem a classe. |
| [`12-seletor-id`](exemplos/12-seletor-id/) | `#produtos` funciona — e fica fora do estilo na disciplina. |
| [`13-grupo`](exemplos/13-grupo/) | `h1, h2`: a mesma regra para dois seletores, separados por vírgula. |
| [`14-descendente`](exemplos/14-descendente/) | `.menu a`: só os links que estão dentro do menu. |
| [`15-filho`](exemplos/15-filho/) | `.depoimento > p`: só o parágrafo filho direto, não o que está dentro do `blockquote`. |
| [`16-atributo`](exemplos/16-atributo/) | `[type="email"]` e `[required]`: campos encontrados pelo que está escrito na tag. |
| [`17-bloco-e-linha`](exemplos/17-bloco-e-linha/) | O fundo do parágrafo vai de uma borda à outra; o do link cobre só as palavras. |
| [`18-padding`](exemplos/18-padding/) | O preenchimento em volta do texto, nos quatro lados e num lado só. |
| [`19-border`](exemplos/19-border/) | A borda em volta do preenchimento. |
| [`20-estilos-borda`](exemplos/20-estilos-borda/) | `solid`, `dashed` e `dotted`: a mesma borda com três estilos de linha. |
| [`21-margin`](exemplos/21-margin/) | A margem dos dois lados, e o `margin: 0` no `body`. A margem é transparente. |
| [`22-margem-colapsa`](exemplos/22-margem-colapsa/) | 40 pixels embaixo, 24 em cima, e o espaço entre as caixas é 40: o colapso de margem. |
| [`23-width-fixa`](exemplos/23-width-fixa/) | Uma largura fixa de 600 pixels estoura a tela estreita. |
| [`24-max-width`](exemplos/24-max-width/) | `max-width`: a caixa para em 600 pixels na tela larga e encolhe na estreita. |
| [`25-box-sizing`](exemplos/25-box-sizing/) | A mesma caixa com `content-box` e com `border-box`: 288 contra 240 pixels. |
| [`26-raio-sombra`](exemplos/26-raio-sombra/) | Cantos arredondados e sombra no cartão de produto. |
| [`27-rem-px`](exemplos/27-rem-px/) | Um texto em `rem` e outro em `px`: só o `rem` acompanha a letra escolhida nas configurações do navegador. |
| [`28-em`](exemplos/28-em/) | O preenchimento em `em` acompanha a letra do próprio botão; o em `px` não. |
| [`29-porcentagem`](exemplos/29-porcentagem/) | `width: 50%`: metade da largura de quem está em volta. |
| [`30-ordem`](exemplos/30-ordem/) | Duas regras com o mesmo seletor: vence a que vem por último. |
| [`31-especificidade`](exemplos/31-especificidade/) | `.aviso` vence `p` mesmo vindo antes: 0-1-0 contra 0-0-1. |
| [`32-especificidade-composta`](exemplos/32-especificidade-composta/) | `p.aviso` vence `.aviso`: 0-1-1 contra 0-1-0. |
| [`33-id-vence`](exemplos/33-id-vence/) | Um seletor com `id` vence as regras de classe que vêm depois. |
| [`34-importante`](exemplos/34-importante/) | `!important` numa classe vence até o `id` — e por que ele não se usa. |
| [`35-heranca`](exemplos/35-heranca/) | A cor passa da caixa para o que está dentro dela; a borda não. |
| [`36-heranca-body`](exemplos/36-heranca-body/) | Uma regra só, no `body`, muda a letra e a cor da página inteira. |
| [`37-heranca-link`](exemplos/37-heranca-link/) | O parágrafo herda a cor do `body`; o link não, porque a folha padrão declara a cor dele. |
| [`38-reset-margem`](exemplos/38-reset-margem/) | Bloco 2 do reset: nenhuma margem de fábrica. |
| [`39-reset-linha`](exemplos/39-reset-linha/) | Bloco 3 do reset: `line-height: 1.5` no `body`. |
| [`40-reset-imagem`](exemplos/40-reset-imagem/) | Bloco 4 do reset: a imagem nunca maior que o espaço dela. |
| [`41-reset-campos`](exemplos/41-reset-campos/) | Bloco 5 do reset: campo e botão com a letra do texto. |
| [`42-reset-quebra`](exemplos/42-reset-quebra/) | Bloco 6 do reset: a palavra comprida quebra em vez de estourar a caixa. |
| [`43-reset-ordem`](exemplos/43-reset-ordem/) | O `head` com o `reset.css` antes do `estilo.css`. No painel, com o `body` selecionado, o `line-height: 1.6` do `estilo.css` vence, e o `1.5` do reset aparece riscado. |
| [`44-font-family`](exemplos/44-font-family/) | `font-family` com a letra do sistema e o plano B. O antes, com a letra de fábrica, está no slide. |
| [`45-fontes-web`](exemplos/45-fontes-web/) | Três fontes do Google Fonts ligadas por um `<link>`, ao lado da letra do sistema. |
| [`46-escala`](exemplos/46-escala/) | A escala dos títulos: `2.25rem`, `1.5rem` e `1rem`. |
| [`47-peso`](exemplos/47-peso/) | `font-weight: 400` tira o negrito de fábrica de um título. |
| [`48-peso-altura`](exemplos/48-peso-altura/) | O mesmo título e o mesmo parágrafo com altura de linha `1.1` e `1.6`. |
| [`49-line-height-unidade`](exemplos/49-line-height-unidade/) | `line-height` com unidade (`24px`) e sem unidade (`1.5`): com unidade, as linhas do título se sobrepõem. Estreite a janela até o título quebrar em duas linhas: numa linha só, não há o que sobrepor. |
| [`50-medida`](exemplos/50-medida/) | `max-width: 34rem` no parágrafo: a linha deixa de ir de uma borda à outra. |
| [`51-ritmo`](exemplos/51-ritmo/) | O espaço entre título e texto com as margens de `h2` e `p`. |
| [`52-notacoes`](exemplos/52-notacoes/) | A mesma cor escrita por nome, em hexadecimal e em `rgb()`. |
| [`53-transparencia`](exemplos/53-transparencia/) | `rgb()` com transparência sobre dois fundos diferentes. |
| [`54-contraste`](exemplos/54-contraste/) | Cinza claro e cinza escuro sobre o branco: 2,8:1 e 7,0:1. |
| [`55-propriedade-customizada`](exemplos/55-propriedade-customizada/) | `--cor-marca` declarada em `:root` e usada com `var()`. |
| [`56-trocar-linha`](exemplos/56-trocar-linha/) | Trocar o valor de `--cor-marca` muda o título e o botão juntos. |
| [`57-tokens-poucos`](exemplos/57-tokens-poucos/) | O `tokens.css` com quatro tokens e o `estilo.css` que só usa os nomes. |
| [`58-head-tres`](exemplos/58-head-tres/) | O `head` com as três folhas: `reset.css`, `tokens.css` e `estilo.css`. |
| [`59-cartao-tokens`](exemplos/59-cartao-tokens/) | O cartão de produto feito só com tokens. |
| [`60-cabecalho-rodape`](exemplos/60-cabecalho-rodape/) | Cabeçalho e rodapé pelas classes `cabecalho-site` e `rodape-site`. |
| [`61-busca-button`](exemplos/61-busca-button/) | `.busca button`: o botão da lupa encontrado pelo contexto, sem classe nova no HTML. |

## `inicio/`

| Arquivo | O que é |
|---|---|
| `reset.css` | A folha que zera as diferenças de fábrica entre navegadores, lida bloco a bloco nos slides. Ela vai para o seu repositório **como está**, sem mudança, e é ligada antes das suas folhas. O roteiro da Atividade 3, no SIGAA, diz como levá-la. |

## ⚠️ Solução da Atividade 3

A pasta [`solucao_atividade_aula03/`](solucao_atividade_aula03/) tem **a solução da Atividade 3**: as quatro páginas e as quatro folhas de estilo de um site possível, e o que se esperava em cada item do relatório. Ela foi publicada depois do prazo de entrega — se você ainda está fazendo a atividade, não abra.
