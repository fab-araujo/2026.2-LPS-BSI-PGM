# Aula 5 — os exemplos

Clique no nome de um exemplo. No site da disciplina (GitHub Pages), ele abre já com o estilo, e o F12 mostra no painel o que o slide mostrou. Aqui no GitHub, abre a pasta com o código.

O que é cada pasta está no [README da aula](../).

| Exemplo | O que mostra |
|---|---|
| [01-sem-estilo](01-sem-estilo/) | O catálogo mínimo, sem nenhuma folha: a aparência de fábrica do navegador. |
| [02-so-o-link](02-so-o-link/) | Só o `<link>` do `bootstrap.min.css`: o Reboot muda letra, margens e botão; a foto de 640 px passa da tela estreita. |
| [03-img-fluid](03-img-fluid/) | A primeira classe, `img-fluid`: a foto nunca passa da largura disponível. |
| [04-integrity-errada](04-integrity-errada/) | Uma letra trocada no `integrity`: o navegador recusa a folha, e o Console (F12) diz por quê. |
| [05-com-script](05-com-script/) | O trecho da documentação inteiro: `<link>` com `integrity` e `crossorigin` e o `<script defer>` do `bootstrap.bundle.min.js`. |
| [06-container](06-container/) | `container`: a largura máxima cresce em degraus e o conteúdo fica no centro. |
| [07-container-fluid](07-container-fluid/) | `container-fluid`: a largura toda, em qualquer janela. |
| [08-colunas](08-colunas/) | `row` e `col-12 col-sm-6 col-lg-4`: uma, duas e três colunas conforme a faixa. |
| [09-calhas](09-calhas/) | `row g-4`: calha também entre as colunas que caem uma embaixo da outra. |
| [10-row-cols](10-row-cols/) | `row-cols-1 row-cols-sm-2 row-cols-lg-3`: quantas colunas por linha, em cada faixa. |
| [11-espaco-antes](11-espaco-antes/) | O cabeçalho antes dos utilitários de espaço. |
| [12-espaco](12-espaco/) | `py-3 mb-4` no cabeçalho e `mb-0` no título: utilitários de espaço. |
| [13-flex](13-flex/) | `d-flex justify-content-between align-items-center`: o cabeçalho em fila, com os itens nas pontas. |
| [14-texto](14-texto/) | `text-body-secondary`, `fw-bold` e a classe `h5` num `h3`: utilitários de texto. |
| [15-d-none](15-d-none/) | `d-none d-lg-block`: a lista "Mais pedidos" só aparece a partir de 992 px. |
| [16-botao](16-botao/) | O botão de fábrica, `btn btn-primary` e `btn btn-outline-secondary`. |
| [17-cartao](17-cartao/) | Um cartão: `card`, `card-img-top`, `card-body`, `card-title` e `card-text`. |
| [18-grade-de-cartoes](18-grade-de-cartoes/) | Os sete cartões numa lista que é a grade (`row-cols-*`), com `h-100` e `list-unstyled`. |
| [18b-sem-h-100](18b-sem-h-100/) | A mesma grade sem `h-100`: na mesma linha, cartões de alturas diferentes. |
| [19-filtros](19-filtros/) | O formulário dos filtros: `form-label`, `form-control` e `form-select` na grade. |
| [20-navbar](20-navbar/) | A barra de navegação: `navbar-expand-md`, o botão `navbar-toggler` e o bloco `collapse` (precisa do script). |
| [21-modal](21-modal/) | O diálogo de detalhe do primeiro produto: `modal`, aberto por `data-bs-toggle="modal"` (precisa do script). |
| [22-catalogo-bootstrap](22-catalogo-bootstrap/) | O catálogo inteiro em Bootstrap, sem customização: a versão que se mede ao lado da da aula 4. |
| [23-armadilha](23-armadilha/) | `--bs-primary` redefinido no `:root`: nenhum botão muda. |
| [24-variavel-do-componente](24-variavel-do-componente/) | `.btn-primary` com as variáveis do componente (`--bs-btn-bg`…) apontando para os tokens: o botão muda. |
| [25-tokens-alimentam](25-tokens-alimentam/) | O catálogo com `tokens.css` e `agrofeira-bootstrap.css`: fundo, texto, letra, cantos, links e botão do projeto. |
| [26-data-tema](26-data-tema/) | O site da aula 4 com `data-tema="escuro"` no `<html>` e a regra `[data-tema="escuro"]` nos tokens. |
| [26b-sem-data-tema](26b-sem-data-tema/) | O mesmo site sem o atributo: segue o tema do sistema. |
| [27-data-bs-theme](27-data-bs-theme/) | `data-bs-theme="dark"` no `<html>`: o modo escuro do Bootstrap. |
| [28-escuro-customizado-sem-tokens](28-escuro-customizado-sem-tokens/) | O escuro do Bootstrap com a customização clara: os temas se misturam. |
| [29-escuro-customizado](29-escuro-customizado/) | Os tokens com valores escuros em `[data-bs-theme="dark"]`: o escuro customizado. |
| [30-utilitario-vence](30-utilitario-vence/) | `.card-body{padding:2rem}` contra `p-2`: o `!important` do utilitário vence. |
| [31-ordem-antes](31-ordem-antes/) | A folha própria ligada antes do Bootstrap: `.btn{border-radius:999px}` perde. |
| [32-ordem-depois](32-ordem-depois/) | A folha própria ligada depois do Bootstrap: a mesma regra vence. |
| [33-bootstrap-6-alfa](33-bootstrap-6-alfa/) | Horizonte: o Bootstrap 6 alfa, com `md:col-6 lg:col-4` e o script como módulo. |
| [34-icones](34-icones/) | Horizonte: Bootstrap Icons nos botões. |
