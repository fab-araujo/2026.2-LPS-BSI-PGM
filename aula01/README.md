# Aula 1 — A Web como plataforma

Exemplos mostrados em sala, na ordem em que apareceram nos slides. Clique em qualquer arquivo: o GitHub mostra o código na própria página, que é tudo de que você precisa hoje.

> A maioria destes exemplos é um **pedaço** de HTML, sem `head` nem `body`: eles mostram uma peça de cada vez. Os documentos completos são os de número 05, 06, 07, 14 e 15 — e o seu `index.html` tem que ser um documento completo como esses.

Para **ler**: clique no arquivo aqui no GitHub, que ele aparece na própria página. E é só isso — **não copie exemplo nenhum para o seu `agrofeira-<seu-usuário>`**: lá vai só o que você escrever. Ver um arquivo rodando direto do codespace entra no encontro 8.

| Arquivo | O que mostra |
|---|---|
| `01-texto-puro.html` | Um arquivo HTML é um arquivo de texto. Sem nenhuma marca. |
| `02-quebras-de-linha.html` | O navegador ignora as quebras de linha que você digita. |
| `03-primeiras-tags.html` | `h1` e `p`: a marca diz o que o trecho é. |
| `04-aninhamento.html` | Tags dentro de tags: `strong` e `em` dentro de um parágrafo. |
| `05-documento-minimo.html` | `doctype`, `html lang`, `head` e `body`. O `title` aparece na aba. |
| `06-charset-errado.html` | Declaração de caracteres errada: o acento quebra. |
| `07-charset-certo.html` | O mesmo documento com `utf-8`: o acento aparece. |
| `08-regioes-semanticas.html` | `header`, `main` e `footer`. |
| `09-mesmas-caixas-com-div.html` | As mesmas caixas com `div`. Compare o resultado com o anterior. |
| `10-titulos-e-paragrafos.html` | Os seis níveis de título, de `h1` a `h6`, com um parágrafo em cada. Repare que `h5` e `h6` aparecem menores que o parágrafo: a tag é hierarquia, não tamanho. |
| `11-listas.html` | `ul` com `li` (lista sem ordem, com marcadores) e `ol` com `li` (lista ordenada, com números). Compare os dois no navegador. |
| `12-links.html` | `a href`: link externo, menu dentro de `nav` e link interno. O link interno aponta para `#produtos`; quem recebe o salto é o `h2 id="produtos"` mais abaixo. |
| `13-imagens-e-alt.html` | `img` com `src` e `alt`. Os arquivos não existem de propósito: o que aparece é o `alt`. |
| `14-o-head-completo.html` | As três linhas do `head`: `meta charset`, `meta viewport` e `title`. |
| `15-uma-pagina-completa.html` | A página *Sobre* inteira: o `head` completo, as quatro regiões, título, texto, menu, link externo e imagem com `alt`. É o exemplo de como um documento fica quando todas as peças estão no lugar. |

## Experimente

> Estas comparações pedem os exemplos abertos no navegador, o que entra no encontro 8, quando o site passa a ser servido de dentro do próprio codespace. Até lá, leia o código aqui e compare com as imagens dos slides.

- Abra `06` e `07` lado a lado e troque uma linha por vez.
- Abra `08` e `09` no navegador. São iguais na tela — e diferentes para um leitor de tela, para um buscador e para quem for manter o código.
- Em `12`, apague o `id="produtos"` e clique no menu de novo: o link para de funcionar.
- Em `13`, troque o `alt` por uma descrição melhor e recarregue.

A **home** da AgroFeira não está aqui, e é de propósito: montá-la é a Atividade 1, cujo roteiro está em [`atividade01/`](atividade01/). O exemplo 15 é outra
página do mesmo site — serve para você ver um documento completo por dentro, não para copiar.
