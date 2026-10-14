# Aula 5 — os exemplos

Clique no nome de um exemplo. No site da disciplina (GitHub Pages), ele abre já com o estilo, e o F12 mostra no painel o que a figura da apostila mostrou. Aqui no GitHub, abre a pasta com o código.

O que é cada pasta está no [README da aula](../).

| Exemplo | O que mostra |
|---|---|
| [01-sem-estilo](01-sem-estilo/) | O catálogo mínimo, sem nenhuma folha: a aparência de fábrica do navegador. |
| [02-so-o-link](02-so-o-link/) | Só o `<link>` do `bootstrap.min.css`: o Reboot muda letra, margens e botão; a foto de 640 px passa da tela estreita. |
| [03-img-fluid](03-img-fluid/) | A primeira classe, `img-fluid`: a foto nunca passa da largura disponível. |
| [04-integrity-errada](04-integrity-errada/) | Uma letra trocada no `integrity`: o navegador recusa a folha, e o Console (F12) diz por quê. |
| [05-trecho-completo](05-trecho-completo/) | O `<link>` como a documentação oferece, com `integrity` e `crossorigin`. |
| [06-tres-pecas](06-tres-pecas/) | `container`, `row` e `col`, uma dentro da outra: duas colunas na primeira linha, uma na segunda. |
| [07-partes-iguais](07-partes-iguais/) | `col` sem número: uma, duas, três, quatro e seis colunas dividem a linha em partes iguais. |
| [08-calhas](08-calhas/) | A calha entre as colunas: `row gx-0`, `row gx-2` e `row`, a de fábrica. |
| [09-doze-partes](09-doze-partes/) | As 12 partes da linha: doze `col-1`, `col-12`, `col-6` + `col-6`, `col-4` + `col-8`, quatro `col-3`. |
| [10-soma](10-soma/) | Quando a soma não dá 12: `col-4` sozinha, `col-9` + `col-3`, `col-9` + `col-4` (a segunda desce) e `col-3` + `col`. |
| [11-col-md-6](11-col-md-6/) | `col-md-6`: uma embaixo da outra até 767 px, metade a partir de 768 px. |
| [12-tres-faixas](12-tres-faixas/) | `col-12 col-md-6 col-xl-3`: uma, duas e quatro por linha. |
| [13-container](13-container/) | `container`: a largura máxima cresce em degraus e a grade fica no centro. |
| [14-container-fluid](14-container-fluid/) | `container-fluid`: a largura toda, em qualquer janela. |
| [15-grade-dentro](15-grade-dentro/) | Uma `row` dentro de uma `col-8`: a grade de dentro conta 12 partes na largura da coluna. |
| [16-pagina-na-grade](16-pagina-na-grade/) | Uma página inteira na grade: cabeçalho, chamada, destaques, conteúdo com lateral e rodapé. |
| [17-colunas](17-colunas/) | Os cartões do catálogo na grade: `col-12 col-sm-6 col-lg-4`. |
| [18-calhas-cartoes](18-calhas-cartoes/) | `row g-4`: calha também entre os cartões que descem para a linha de baixo. |
| [19-row-cols](19-row-cols/) | `row-cols-1 row-cols-sm-2 row-cols-lg-3`: quantas colunas por linha, em cada faixa. |
| [19b-titulos](19b-titulos/) | Os seis níveis de título, `h1` a `h6`, em sequência, com um parágrafo para comparar os tamanhos. |
| [19c-display](19c-display/) | A palavra AgroFeira em `display-1` a `display-6`: títulos de destaque, maiores que o `h1`. |
| [19d-sobre-antes](19d-sobre-antes/) | A página "Sobre a feira" só com o Reboot, sem nenhuma classe de texto: o "antes". |
| [19e-sobre](19e-sobre/) | A mesma página com `display-4`, `lead`, a classe `h4`, `blockquote`, `list-inline` e `list-unstyled`: o "depois". |
| [20-espaco-antes](20-espaco-antes/) | O cabeçalho antes dos utilitários de espaço. |
| [21-espaco](21-espaco/) | `py-3 mb-4` no cabeçalho e `mb-0` no título: utilitários de espaço. |
| [22-texto](22-texto/) | `text-body-secondary`, `fw-bold` e a classe `h5` num `h3`: utilitários de texto. |
| [23-flex](23-flex/) | `d-flex justify-content-between align-items-center`: o cabeçalho em fila, com os itens nas pontas. |
| [24-d-none](24-d-none/) | `d-none d-lg-block`: a lista "Mais pedidos" só aparece a partir de 992 px. |
| [25-botao](25-botao/) | O botão de fábrica, `btn btn-primary` e `btn btn-outline-secondary`. |
| [25b-link-botao](25b-link-botao/) | Um link comum e um `<a class="btn btn-outline-secondary">` ao lado de um `<button>`: a classe muda a aparência, não o elemento. |
| [26-cartao](26-cartao/) | Um cartão: `card`, `card-img-top`, `card-body`, `card-title` e `card-text`. |
| [27-selo](27-selo/) | O cartão com o selo "Safra nova": `badge text-bg-success`. |
| [27b-variantes](27b-variantes/) | As oito variantes de cor, em `badge text-bg-*` e em `btn btn-*`. |
| [28-grade-de-cartoes](28-grade-de-cartoes/) | Os sete cartões numa lista que é a grade (`row-cols-*`), com `h-100` e `list-unstyled`. |
| [28b-sem-h-100](28b-sem-h-100/) | A mesma grade sem `h-100`: na mesma linha, cartões de alturas diferentes. |
| [28c-sem-list-unstyled](28c-sem-list-unstyled/) | A grade de cartões sem `list-unstyled`: voltam o marcador e o recuo da lista. |
| [30-alerta](30-alerta/) | O aviso de entrega: `alert alert-warning`. |
| [31-lista](31-lista/) | A lista "Mais pedidos" na lateral: `list-group list-group-numbered` e `list-group-item`. |
| [33-catalogo-bootstrap](33-catalogo-bootstrap/) | O catálogo inteiro em Bootstrap, sem customização: a versão que se mede ao lado da da aula 4. |
| [33b-com-fonte](33b-com-fonte/) | O catálogo em Bootstrap do exemplo 33 com a fonte Lora, do Google Fonts: a folha entra no filtro CSS da aba Network e o arquivo da fonte, no filtro Font. |
| [34-armadilha](34-armadilha/) | `--bs-primary` redefinido no `:root`: nenhum botão muda. |
| [35-tokens-alimentam](35-tokens-alimentam/) | O catálogo com `tokens.css` e `agrofeira-bootstrap.css`: fundo, texto, letra, cantos, links e o botão (pela variável do componente) com os valores do projeto. |
| [35b-foco](35b-foco/) | O anel de foco do botão customizado com o token `--cor-foco` (`--bs-btn-focus-box-shadow`), ao lado do anel de fábrica. |
| [35c-trio-com-espacos](35c-trio-com-espacos/) | O trio de cor do link escrito com espaços em vez de vírgulas: a declaração fica inválida e o link volta à cor do texto. |
| [36-data-tema](36-data-tema/) | O site da aula 4 com `data-tema="escuro"` no `<html>` e a regra `[data-tema="escuro"]` nos tokens. |
| [36b-sem-atributo](36b-sem-atributo/) | O site completo da aula 4 com o tema por atributo, mas sem o atributo na tag `html`, para acrescentá-lo pelo F12. |
| [37-escuro-customizado](37-escuro-customizado/) | `data-bs-theme="dark"` no `<html>` e os tokens com valores escuros em `[data-bs-theme="dark"]`. |
| [37b-escuro-sem-tokens](37b-escuro-sem-tokens/) | `data-bs-theme="dark"` sem os tokens escuros: a página fica misturada, metade clara e metade escura. |
| [37c-sistema-escuro](37c-sistema-escuro/) | O sistema em tema escuro, sem o atributo: os tokens vão para o escuro pela media query e o Bootstrap continua claro. |
| [38-utilitario-vence](38-utilitario-vence/) | `.card-body{padding:2rem}` contra `p-2`: o `!important` do utilitário vence. |
