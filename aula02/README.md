# Aula 2 — HTML5 que significa alguma coisa

Duas pastas:

- `exemplos/` — os exemplos mostrados em sala, na ordem em que apareceram nos slides;
- `inicio/` — as cinco imagens da Atividade 2, prontas no tamanho certo.

## `exemplos/`

Clique em qualquer arquivo: o GitHub mostra o código na própria página. É o mesmo código do slide, sem tirar nem pôr.

> A maioria destes exemplos é um **pedaço** de HTML, sem `head` nem `body`: eles mostram uma peça de cada vez. Os documentos completos são os de número 01 e 27 — e cada página da Atividade 2 tem que ser um documento completo.

As imagens citadas nos exemplos (`tomate.jpg`, `cesta-320.jpg`, `lupa.svg` e as outras) não estão na pasta, de propósito, como na Aula 1. Nos slides, o lugar de cada uma aparece como um retângulo colorido com o nome do arquivo.

Estes exemplos são para **ler**, não para copiar: no seu `agrofeira-<seu-usuário>` vai só o que você escrever.

| Arquivo | O que mostra |
|---|---|
| `01-documento-minimo.html` | O documento que você já escreve: `doctype`, `html lang`, `head` com `meta charset`, `meta viewport` e `title`, e o `body`. |
| `02-metadados-sociais.html` | As `meta property="og:..."` de um vídeo do YouTube: é daqui que sai o cartão com foto e título quando alguém cola o link numa conversa. |
| `03-regioes-e-section.html` | `header`, `nav`, `main` e `footer`, com uma `section` dentro do `main`. |
| `04-article-aside-search.html` | `article` (conteúdo que se sustenta sozinho), `aside` (conteúdo relacionado) e `search` (a região de busca). |
| `05-titulos-paragrafo-enfase.html` | Títulos em três níveis, parágrafos, `strong` (importância) e `em` (ênfase). |
| `06-listas-e-citacao.html` | `ul`, `ol` e `dl` (lista de definição, com `dt` e `dd`), e `blockquote` para citação. |
| `07-links-e-ancoras.html` | Link para outra página (`produtos.html`) e link para um ponto da mesma página (`#sobre`), que salta até o `id="sobre"`. |
| `08-tabela-base.html` | A base de toda tabela: `table`, `tr` (linha) e `td` (célula). |
| `09-tabela-caption.html` | A mesma tabela com `caption`: a tabela ganha um nome. |
| `10-tabela-thead-tbody-th.html` | `thead` e `tbody`, e `th` com `scope="col"` (cabeçalho de coluna) e `scope="row"` (cabeçalho de linha). |
| `11-imagem-no-conteudo.html` | `img` com `src`, `width`, `height` e `alt`, dentro de um `article`. |
| `12-picture-e-figure.html` | `picture` com dois `source` (`srcset` com a largura de cada arquivo e `sizes`), o `img` de reserva com `loading="lazy"`, tudo dentro de `figure` com `figcaption`. |
| `13-alt-informativo-e-decorativo.html` | Uma imagem que informa (o `alt` descreve) e uma que só enfeita (`alt=""`). |
| `14-alt-funcional.html` | Um botão que só tem ícone: o `alt` diz a ação, não o desenho. |
| `15-alt-complexo.html` | Um gráfico: o `alt` diz o que ele é, e a `figcaption` conta o que ele mostra. |
| `16-formulario.html` | `form`, `label` com `for`, `input`, `select` com `option`, `textarea`, `fieldset` com `legend`, botões de escolha (`radio`), caixa de marcar (`checkbox`) e `button`. |
| `17-campo-de-texto.html` | O campo mais simples: `label` e `input type="text"`. |
| `18-tipos-de-campo.html` | `type="email"`, `"tel"`, `"number"` e `"date"`; `autocomplete` e `inputmode`. |
| `19-fieldset-legend.html` | Campos agrupados por assunto, com o nome do grupo na `legend`. |
| `20-validacao-nativa.html` | `required`, `min`, `max`, `step` e `pattern`: o navegador barra o envio sem nenhuma linha de script. |
| `21-details-summary.html` | Um acordeão sem script: dois `details` com o mesmo `name`, e abrir um fecha o outro. |
| `22-dialog.html` | A caixa de diálogo nativa, aberta com o atributo `open`. |
| `23-link-de-pular.html` | O link de pular para o conteúdo: o primeiro link da página, apontando para o `id` do `main`. |
| `24-rotulo-associado.html` | O `for` do `label` igual ao `id` do campo: é isso que liga os dois. |
| `25-aria-minimo.html` | `aria-label`, `aria-describedby` e `aria-current`. |
| `26-regiao-viva.html` | Uma região com `role="status"` e `aria-live="polite"`, que anuncia sem interromper. Hoje ela fica vazia. |
| `27-dois-erros-para-o-validador.html` | Um documento com dois erros de propósito (imagem sem `alt` e `id` repetido), para você ver o que o validador do W3C diz de cada um. |

## `inicio/`

As cinco imagens que as páginas da Atividade 2 usam, já no tamanho certo. O roteiro da atividade, no SIGAA, diz como levá-las para o seu repositório.

| Arquivo | Largura × altura (pixels) | Origem |
|---|---|---|
| `feira-330.jpg` | 330 × 247 | Foto: Rayelle da Silva Freitas, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Barraca_de_Frutas_e_Legumes_na_Feira_Livre_de_Jacobina.jpg) |
| `feira-1280.jpg` | 1280 × 960 | A mesma foto, em tamanho maior |
| `cupuacu.jpg` | 330 × 247 | Foto: BjoernS, [CC BY-SA 2.0 DE](https://creativecommons.org/licenses/by-sa/2.0/de/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cupuacu_fruit_opened.jpg) |
| `lupa.png` | 40 × 40 | Domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Magnifying_glass_icon.svg) |
| `enfeite.png` | 330 × 93 | Domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bullokar%27s_A_Short_Introduction_-_fleuron_with_flowers.svg) |

As duas fotos pedem crédito, e ele vai escrito na página, junto de cada foto.
