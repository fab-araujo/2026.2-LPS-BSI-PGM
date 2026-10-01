# ⚠️ SOLUÇÃO DA ATIVIDADE 2

> **Esta pasta é a solução da Atividade 2**, publicada depois do prazo de entrega. Se você ainda está fazendo a atividade, pare aqui e volte ao roteiro, no SIGAA.

A solução tem duas partes, como a atividade: as quatro páginas e o que se esperava em cada item do relatório.

## As páginas

- O código: [`index.html`](index.html), [`safra.html`](safra.html), [`cadastro-produtor.html`](cadastro-produtor.html) e [`sobre.html`](sobre.html), com as cinco imagens ao lado, na mesma pasta — como na raiz do seu repositório.
- O site no ar: <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula02/solucao_atividade_aula02/>.

É **uma** resposta possível. Os textos da sua podiam ser outros — eles eram seus. O que a correção olhava é a marcação, e ela é esta.

### A moldura, igual nas quatro páginas (Passo 3)

| O que o roteiro pedia | Como fica no código |
|---|---|
| O esqueleto, com um título próprio de cada página | o mesmo da Atividade 1; o `<title>` muda: `AgroFeira — início`, `AgroFeira — calendário de safra`… |
| Primeiro elemento do corpo: o link de pular | `<a class="pular" href="#conteudo">Pular para o conteúdo</a>`, antes do `<header>` |
| Região de cabeçalho | `<header class="cabecalho-site">` com o `<h1>` e o `<nav>` |
| Região de navegação, com o nome Principal | `<nav aria-label="Principal">` com uma `<ul class="menu">` de quatro `<li>`, cada um com um `<a href>` para uma página |
| O link da página atual | `aria-current="page"` no link da própria página — e só nele, por isso ele muda de página para página |
| Região de conteúdo principal | `<main id="conteudo">`: o `id` é o destino do link de pular |
| Região de rodapé | `<footer class="rodape-site">` com um `<p>` |

### A home (Passo 4)

| O que o roteiro pedia | Como fica no código |
|---|---|
| Duas seções temáticas, cada uma começando por um título com identificador | `<section>` com `<h2 id="quem-somos">` e `<section>` com `<h2 id="produtos">` |
| Dois links no texto que saltam para elas | `<a href="#quem-somos">` e `<a href="#produtos">`, num parágrafo antes da primeira seção |
| Uma expressão em ênfase | `<em>` |
| A figura com legenda e crédito | `<figure class="figura-destaque">` com o `<img>` e o `<figcaption>` |
| A foto nos dois tamanhos, e o navegador escolhe | no `<img>`: `srcset="feira-330.jpg 330w, feira-1280.jpg 1280w"` (cada arquivo com a sua largura), `sizes="330px"` (quanto a foto ocupa na tela), e `src`, `width="330"` e `height="247"` |
| A busca, com o botão só de ícone | `<search>` com `<form class="busca">`: `<label for="q">`, `<input type="search" id="q" name="q">` e `<button type="submit">` com um `<img alt="Procurar">` — o alternativo diz a ação, não o desenho |
| Os seis produtos | `<ul class="lista-produtos">` com seis `<li class="cartao-produto">` |
| O aviso, com a parte importante | `<div class="aviso">` com um `<p>` e o `<strong>` — a única caixa genérica do site |
| Conteúdo relacionado, depois do principal | `<aside>`, depois do `</main>`, com o endereço e o horário |

### A safra (Passo 5)

| O que o roteiro pedia | Como fica no código |
|---|---|
| Título e parágrafo de legenda | `<h2>` e `<p id="legenda-safra">` |
| A legenda ligada à tabela | `aria-describedby="legenda-safra"` no `<table>` |
| O título da tabela | `<caption>`, logo depois do `<table class="tabela-safra">` |
| Cabeçalho de coluna | `<thead>` com uma linha de `<th scope="col">`: Produto e os seis meses |
| Cabeçalho de linha | `<tbody>` com uma linha por produto: `<th scope="row">` com o nome, e seis `<td>` com cheio, meia ou vazio |

### O cadastro (Passo 6)

| O que o roteiro pedia | Como fica no código |
|---|---|
| Os grupos com título | `<fieldset>` com `<legend>`: "Quem é você" e "O que você vende"; dentro do segundo, outro `<fieldset>` para "Como entrega" |
| Todo campo com rótulo | `<label for="...">` com o mesmo valor do `id` do campo — inclusive nos dois botões de escolha e na caixa de marcar |
| Nome, e-mail e telefone | `type="text"`, `type="email"` e `type="tel"`, com `autocomplete="name"`, `"email"` e `"tel"`; `required` nos dois primeiros |
| O CEP | `type="text"`, `inputmode="numeric"` e `pattern="[0-9]{5}-?[0-9]{3}"` — o `?` torna o hífen opcional —, com `aria-describedby="dica-cep"` apontando para o `<span id="dica-cep">` com o formato |
| O produto | `<select required>` cuja primeira opção é `<option value="">Escolha um produto</option>`: o valor vazio é o que faz o `required` barrar o envio |
| A quantidade | `type="number"`, `min="1"`, `max="500"`, `step="1"`, `required` |
| Como entrega | dois `<input type="radio">` com o **mesmo `name`** — é isso que os torna exclusivos |
| Observação e aceite | `<textarea>` e `<input type="checkbox" required>` |
| A região de status | `<p role="status" aria-live="polite"></p>`, vazio, depois do formulário |

### A página Sobre (Passo 7)

| O que o roteiro pedia | Como fica no código |
|---|---|
| O depoimento | `<article>` com `<h3>`, a foto, o crédito num `<p>` logo abaixo e o `<blockquote>` |
| A foto do cupuaçu | `alt` que descreve o que se vê, `width="330"`, `height="247"` e `loading="lazy"` |
| O passo a passo | `<h3>` e `<ol>` com três `<li>` — a ordem importa |
| O glossário | `<dl>` com três pares `<dt>` / `<dd>`: saca, cacho e rasa |
| As perguntas | três `<details class="pergunta" name="faq">`, cada um com `<summary>` e a resposta; o **mesmo `name`** faz abrir um fechar o outro |
| O enfeite | `alt=""`: vazio de propósito, porque a imagem só enfeita |

### As classes combinadas (Passo 8)

Estão todas nos lugares da tabela do roteiro: `cabecalho-site`, `menu`, `lista-produtos`, `cartao-produto`, `figura-destaque`, `busca`, `aviso`, `tabela-safra`, `formulario-cadastro`, `pergunta`, `rodape-site` e `pular`. Elas não mudam nada na tela — e eram exatamente isso, um nome reservado para o estilo da Aula 3.

A linha de comentário logo depois do `<!doctype html>` (`<!-- SOLUÇÃO DA ATIVIDADE 2 ... -->`) só marca que o arquivo é a solução; não fazia parte do pedido.

## O relatório: o que se esperava em cada item

Os resultados abaixo foram observados em 01/10/2026 nestas mesmas páginas, publicadas pelo GitHub Pages, no Chrome em português. No seu, os textos são outros, e alguns números podem mudar com eles — o que vale é a leitura de cada passo.

### Item 1 — O que o validador apontou

- As quatro páginas passam **sem nenhum erro e sem nenhum aviso**: "Document checking completed. No errors or warnings to show."
- Se apareceu erro na sua, os mais comuns eram um `</p>` ou `</li>` a mais — o editor fecha a tag sozinho, e quem fechava de novo ficava com uma sobrando —, um `id` repetido na mesma página, e um `for` de rótulo apontando para um `id` que não existe.
- O que o validador confere e o navegador não reclama: o navegador **conserta em silêncio** a marcação quebrada e mostra a página do melhor jeito que consegue. Uma tag fechada no lugar errado, um `id` duplicado, uma imagem sem `alt`, um atributo que não existe naquela tag: na tela, nada parece errado. O validador compara o código com a especificação do HTML e aponta cada um — e é isso que um leitor de tela, um buscador ou outro navegador vão encontrar.

### Item 2 — O teste por teclado

| Passo | O que acontece |
|---|---|
| 1. O primeiro Tab | o foco vai para o link **Pular para o conteúdo**, o primeiro elemento do corpo |
| 2. Enter nele | a página salta para o conteúdo principal, e o endereço ganha **`#conteudo`** no fim. O próximo Tab já cai no primeiro link de dentro do conteúdo, e não no menu |
| 3. Quantos Tabs até o último link do menu | **cinco**: o link de pular e os quatro do menu — Início, Safra, Cadastro de produtor, Sobre |
| 4. A ordem bate com a da tela? | **bate**: o foco anda na ordem em que as coisas estão no código, que é a mesma em que aparecem na tela. Ela só desencontraria se o estilo mudasse a posição das peças sem mudar o código |
| 5. 2.5 na quantidade e Enter | o envio é barrado, aparece o balão **"Insira um valor válido. Os dois valores válidos mais próximos são 2 e 3."** e o foco vai para o campo da quantidade. Quem barrou foi o `step="1"`: só valem números inteiros |
| 6. Abrir a primeira pergunta e depois a segunda | abrir a segunda **fecha a primeira sozinha** — é o mesmo `name` nos três `<details>` |

No Safari, o passo 1 só funciona com a opção **Pressionar Tabulação para destacar cada item** ligada, como o roteiro avisava; sem ela, o Tab pula os links.

### Item 3 — O leitor de tela

As palavras exatas mudam de um leitor para outro (Narrador, VoiceOver) e de uma versão para outra. O que se esperava era isto:

- **Ao entrar na página:** o leitor diz o **título da página** — o `<title>`, por exemplo "AgroFeira — início" — e, em geral, que é uma página web.
- **As três primeiras regiões, na ordem:**

| Região | Vem de | Como o leitor costuma chamá-la |
|---|---|---|
| 1 | `<header>` | cabeçalho, faixa ou *banner* |
| 2 | `<nav aria-label="Principal">` | navegação, **Principal** — o nome dado pelo `aria-label` |
| 3 | `<main>` | conteúdo principal, ou só principal |

O leitor anuncia as regiões pelo **papel** de cada tag, e não pelo que está escrito nela — é por isso que as regiões semânticas importam. Com tudo em `<div>`, ele não teria região nenhuma para anunciar.

### Item 4 — A caixa genérica

- **Onde:** no aviso da home, `<div class="aviso">`.
- **Por que nenhuma tag com significado servia:**
  - não é uma **seção temática** (`<section>`): não tem título próprio, e não é uma parte do conteúdo, é um recado curto dentro dele;
  - não é **conteúdo relacionado** (`<aside>`): o aviso fala dos próprios produtos da página, não de algo à parte;
  - não é um **bloco que se sustenta sozinho** (`<article>`): fora da página, ele não faz sentido;
  - e o significado de "importante" já está onde deve estar, no `<strong>`.
- A caixa existe só para **agrupar** o aviso — para o estilo da Aula 3 encontrá-lo pela classe e dar a ele uma moldura. Agrupar sem dizer o que é, é exatamente o papel da `<div>`.
