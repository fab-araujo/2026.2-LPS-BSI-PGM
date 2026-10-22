# Aula 6 — os exemplos

Clique no nome de um exemplo. No site da disciplina (GitHub Pages), ele abre já com o estilo, e o F12 mostra no painel o que a captura do slide mostrou. Aqui no GitHub, abre a pasta com o código.

O que é cada pasta está no [README da aula](../).

| Exemplo | O que mostra |
|---|---|
| [01-catalogo-base](01-catalogo-base/) | O catálogo da aula 5, com `tokens.css` e `agrofeira-bootstrap.css`: o ponto de partida do dia, sem o script do Bootstrap. |
| [02-collapse-sem-script](02-collapse-sem-script/) | Um botão com `data-bs-toggle="collapse"` e `data-bs-target`, sem o `<script>`: o toque não faz nada. |
| [03-collapse-com-script](03-collapse-com-script/) | O mesmo botão, com o `<script>` do `bootstrap.bundle.min.js`: o bloco abre e fecha. |
| [04-collapse-trecho-completo](04-collapse-trecho-completo/) | O trecho do script como a documentação oferece, com `defer`, `integrity` e `crossorigin`. |
| [05-integrity-script-errada](05-integrity-script-errada/) | Uma letra trocada no `integrity` do script: o navegador o recusa, o botão para de funcionar e o Console (F12) diz por quê. |
| [06-bloco-sem-classe](06-bloco-sem-classe/) | O bloco à vista, sem nenhuma classe do Bootstrap. |
| [07-bloco-collapse](07-bloco-collapse/) | O bloco com `collapse`: escondido; com `collapse show`: à vista. |
| [08-alerta-fecha](08-alerta-fecha/) | O aviso que se fecha: `alert-dismissible`, `btn-close` e `data-bs-dismiss="alert"`. |
| [09-catalogo-com-script](09-catalogo-com-script/) | O catálogo da aula 5 com o script do Bootstrap e o aviso de entrega num bloco que abre e fecha. |
| [10-menu-html](10-menu-html/) | O menu em HTML puro: uma lista de links dentro de `nav`, sem classe do Bootstrap. |
| [11-navbar-marca](11-navbar-marca/) | `navbar` e `navbar-brand`: só a marca. |
| [12-navbar-links](12-navbar-links/) | `navbar-nav`, `nav-item` e `nav-link`: os links da barra. |
| [13-navbar-expand-sem-botao](13-navbar-expand-sem-botao/) | `navbar-expand-lg` sem o botão: a partir de 992 px a barra abre em linha; abaixo disso os links ficam escondidos e nada os abre. |
| [14-navbar-completa](14-navbar-completa/) | A barra completa: `navbar-toggler` e `navbar-toggler-icon`, o botão que abre o menu em telas estreitas. |
| [15-navbar-escura](15-navbar-escura/) | A barra escura, com `data-bs-theme="dark"` na `navbar`. |
| [16-navbar-tokens](16-navbar-tokens/) | A barra com os tokens do projeto: o verde da marca e o anel de foco branco (`.navbar[data-bs-theme="dark"] .nav-link:focus-visible`). |
| [17-nav-underline](17-nav-underline/) | A navegação secundária com `nav` e `nav-underline`. |
| [17b-nav-simples](17b-nav-simples/) | A navegação secundária só com `nav`, sem `nav-underline`, abaixo da barra. |
| [18-navbar-sem-expand](18-navbar-sem-expand/) | A barra sem `navbar-expand`: os links ficam empilhados em qualquer largura. |
| [19-navbar-projeto-antes](19-navbar-projeto-antes/) | A barra no catálogo do projeto, antes da customização: o que o Bootstrap desenha sobre os tokens. |
| [20-modal-marcacao](20-modal-marcacao/) | O diálogo só com a marcação (`modal`, `modal-dialog`, `modal-content`…), sem botão que o abra: fica escondido. |
| [21-modal-botao](21-modal-botao/) | O botão com `data-bs-toggle="modal"` e `data-bs-target` que abre o diálogo. |
| [22-modal-detalhe](22-modal-detalhe/) | O diálogo de detalhe do produto: foto, produtor e preço, com os botões "Fechar" e "Adicionar". |
| [23-modal-centralizado](23-modal-centralizado/) | `modal-dialog-centered`: o diálogo no meio da janela. |
| [24-modal-rolavel](24-modal-rolavel/) | `modal-dialog-scrollable`: a rolagem dentro do corpo do diálogo. |
| [25-modal-tamanhos](25-modal-tamanhos/) | `modal-lg` e `modal-fullscreen-sm-down`: grande no computador e em tela cheia no celular. |
| [26-modal-docs](26-modal-docs/) | O diálogo escrito como a documentação traz (`aria-hidden="true"`, sem `role="dialog"`): o validador o aponta, de propósito. |
| [27-modal-projeto-antes](27-modal-projeto-antes/) | O diálogo no catálogo do projeto, antes da customização: fundo, cantos e botão como saem do Bootstrap. |
| [28-modal-tokens](28-modal-tokens/) | O diálogo com os tokens do projeto: as variáveis `--bs-modal-*` lendo `--cor-superficie`, `--cor-marca`, `--cor-borda` e `--raio`. |
| [29-faixa-fixa](29-faixa-fixa/) | Uma faixa com `position: fixed` (`faixa.css`): os cartões sobem na rolagem e a faixa fica onde está, colada na janela. |
| [30-form-reboot](30-form-reboot/) | Os filtros só com o Reboot: os campos como o navegador os desenha. |
| [31-form-control](31-form-control/) | `form-control`: os campos de texto ocupam a largura do bloco. |
| [31b-form-label](31b-form-label/) | `form-label`: o rótulo acima do campo. |
| [31c-form-select](31c-form-select/) | `form-select`: a lista de escolha. |
| [32-form-check](32-form-check/) | `form-check`, `form-check-input` e `form-check-label`: a caixa de marcar. |
| [32b-radios](32b-radios/) | Os botões de escolha (`radio`) com o mesmo `name`, num `fieldset` com `legend`. |
| [32c-radios-inline](32c-radios-inline/) | `form-check-inline`: os botões de escolha lado a lado. |
| [33-form-text-antes](33-form-text-antes/) | Um campo com a dica de ajuda escrita em um parágrafo comum, sem `form-text`. |
| [33-form-text](33-form-text/) | `form-text`: a dica de ajuda sob o campo. |
| [34-preco-sem-grupo](34-preco-sem-grupo/) | O preço máximo sem grupo: o "R$" e o campo em linhas separadas. |
| [34b-input-group](34b-input-group/) | `input-group` e `input-group-text`: o "R$" colado ao campo. |
| [35a-form-sem-grade](35a-form-sem-grade/) | Os filtros sem grade: um campo embaixo do outro. |
| [35-form-grade](35-form-grade/) | Os filtros na grade: `row g-3` e uma `col-12 col-md-*` em volta de cada par rótulo e campo. |
| [36-catalogo-completo](36-catalogo-completo/) | O catálogo completo em Bootstrap: barra, filtros e cartões, com o script e os tokens do projeto. |
| [37-ordem-do-codigo](37-ordem-do-codigo/) | Dois campos lado a lado, na ordem em que estão no HTML. |
| [37b-order-md](37b-order-md/) | `order-md-1` e `order-md-2`: a ordem na tela muda a partir de `md`, e a ordem no HTML continua a mesma. |
| [38-checkout](38-checkout/) | O fechamento do pedido só com o Bootstrap: campos, grade e botão. |
| [38b-checkout-base-projeto](38b-checkout-base-projeto/) | O fechamento do pedido com a base do projeto (`tokens.css` e `agrofeira-bootstrap.css`), antes da customização. |
| [39-checkout-tokens](39-checkout-tokens/) | O fechamento do pedido com os tokens: o anel de foco e a caixa marcada nas cores do projeto. |
| [40-sem-classe](40-sem-classe/) | Campos obrigatórios sem nenhuma classe de estado: nada mostra o que está certo ou errado. |
| [41-was-validated](41-was-validated/) | `was-validated` escrito à mão no `form`: os campos ganham a borda verde ou vermelha. |
| [41b-feedback](41b-feedback/) | `was-validated` com `valid-feedback` e `invalid-feedback`: as mensagens aparecem sob os campos. |
| [42-script-oficial](42-script-oficial/) | O script de validação da documentação (`validacao.js`) com `needs-validation` e `novalidate`: o envio com erro é barrado e o `was-validated` entra sozinho. |
| [42b-descricao](42b-descricao/) | A mesma validação, com `aria-describedby` ligando o campo à mensagem de erro. |
| [43-feedback-nao-irmao](43-feedback-nao-irmao/) | A mensagem fora do lugar: a `invalid-feedback` não é irmã do campo e não aparece. |
| [43b-irmaos](43b-irmaos/) | O combinador `~` num exemplo mínimo: os irmãos que vêm depois de um elemento (`estilo.css`). |
| [44-servidor](44-servidor/) | A página devolvida pelo servidor com o erro: `is-invalid`, `invalid-feedback` e `aria-invalid="true"` escritos à mão. |
| [45-novalidate-sem-script](45-novalidate-sem-script/) | `novalidate` sem o script de validação: nada barra o envio. |
| [46-nativo-user-invalid](46-nativo-user-invalid/) | A validação do navegador com `:user-invalid`, sem JavaScript (`estilo.css`). |
| [47-endereco-has](47-endereco-has/) | O endereço só na entrega: `:has(#entrega:checked)` mostra o bloco quando "Entrega" está marcada. |
| [48-required-escondido](48-required-escondido/) | `required` num campo escondido: o navegador trava o envio e não mostra nenhum aviso. |
| [49-required-escondido-script](49-required-escondido-script/) | O `required` escondido com `novalidate` e o script de validação: o campo escondido deixa de travar. |
| [49a-validacao-antes](49a-validacao-antes/) | A validação com os tokens do projeto, antes das variáveis do formulário: o vermelho e o verde de fábrica. |
| [49b-validacao-tokens](49b-validacao-tokens/) | A validação com as cores do projeto: `--bs-form-invalid-border-color` e `--bs-form-valid-border-color`. |
| [50-painel-grade](50-painel-grade/) | O painel do produtor: cabeçalho `sticky-top` e a grade `col-lg-3` e `col-lg-9`, com a navegação lateral. |
| [51-offcanvas](51-offcanvas/) | O painel lateral retrátil: `offcanvas`, aberto por `data-bs-toggle="offcanvas"`. |
| [52-offcanvas-lg](52-offcanvas-lg/) | `offcanvas-lg`: retrátil no celular e coluna fixa a partir de 992 px. |
| [52b-offcanvas-sem-lg](52b-offcanvas-sem-lg/) | `offcanvas` sem o `-lg`, na grade: o painel é retrátil em qualquer largura. |
| [53-tabela-reboot](53-tabela-reboot/) | A tabela só com o Reboot, sem classe, com os selos de situação. |
| [53b-tabela](53b-tabela/) | `table`: a tabela de fábrica do Bootstrap. |
| [53c-tabela-hover](53c-tabela-hover/) | `table-hover`: a linha sob o ponteiro ganha destaque. |
| [53d-tabela-listras](53d-tabela-listras/) | `table-striped` com `table-hover`: as linhas alternadas e o destaque. |
| [53e-tabela-meio](53e-tabela-meio/) | `align-middle`: o conteúdo no meio da altura da linha. |
| [53f-tabela-direita](53f-tabela-direita/) | `text-end`: os números alinhados à direita. |
| [53g-tabela-nowrap](53g-tabela-nowrap/) | `text-nowrap`: o texto da célula sem quebra de linha. |
| [53h-tabela-legenda](53h-tabela-legenda/) | `caption-top`: a legenda da tabela no alto. |
| [54-tabela-larga](54-tabela-larga/) | A tabela mais larga que a tela, em 360 px: a página ganha rolagem lateral. |
| [55-tabela-responsiva](55-tabela-responsiva/) | `table-responsive`: a tabela rola dentro da própria caixa. |
| [55b-tabela-responsiva-md](55b-tabela-responsiva-md/) | `table-responsive-md`: a rolagem só abaixo de 768 px. |
| [56-acoes-sem-nome](56-acoes-sem-nome/) | Os botões "Editar" e "Remover" de cada linha com o mesmo nome: o leitor de tela não distingue as linhas. |
| [56b-acoes-visually-hidden](56b-acoes-visually-hidden/) | Os mesmos botões com nome único por linha, com `visually-hidden`. |
| [56c-acoes-sem-relative](56c-acoes-sem-relative/) | `visually-hidden` na região com rolagem sem `position-relative`: a página alarga. |
| [57-confirmacao](57-confirmacao/) | O painel do produtor com a confirmação: o diálogo "Remover" com `data-bs-backdrop="static"` e o botão `btn-danger`. |
| [58-painel-tokens](58-painel-tokens/) | O painel do produtor com os tokens: tabela, painel lateral e botão de perigo nas cores do projeto. |
| [59-painel-escuro](59-painel-escuro/) | O painel no tema escuro: `data-bs-theme="dark"` e os tokens escuros do projeto. |
| [59b-painel-escuro-sem-tokens](59b-painel-escuro-sem-tokens/) | O painel com `data-bs-theme="dark"` e sem os tokens escuros: o que o projeto deixa de herdar. |
| [60-audit-antes](60-audit-antes/) | A página da auditoria de acessibilidade antes das correções: o código como a documentação traz. |
| [61-audit-depois](61-audit-depois/) | A mesma página depois das correções: as mesmas telas, com a marcação corrigida. |
| [62-foco-bootstrap](62-foco-bootstrap/) | O anel de foco de fábrica do Bootstrap em cada peça, para medir. |
| [62a-foco-aula4](62a-foco-aula4/) | A regra de foco da aula 4 aplicada à mesma página. |
| [62b-foco-projeto](62b-foco-projeto/) | O anel de foco do projeto, com o token `--cor-foco`. |
| [63-contraste](63-contraste/) | O contraste das variantes de fábrica (`btn-warning`, `badge`, `btn-outline-secondary`…), para medir. |
| [63b-contraste-projeto](63b-contraste-projeto/) | O contraste das mesmas peças com as correções do projeto. |
| [70-cartao-bootstrap](70-cartao-bootstrap/) | O cartão do catálogo em Bootstrap, com os tokens do projeto. |
| [71-cartao-tailwind](71-cartao-tailwind/) | O mesmo cartão em Tailwind (Play CDN, `@tailwindcss/browser@4.3.3`), só para a comparação. |
| [72-tokens-bootstrap](72-tokens-bootstrap/) | O cartão em Bootstrap com a cor da marca trocada em `tokens.css`. |
| [73-tokens-tailwind](73-tokens-tailwind/) | O cartão em Tailwind com a cor da marca trocada em `tokens.css`. |
