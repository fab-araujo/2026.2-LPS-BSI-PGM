# ⚠️ SOLUÇÃO DA ATIVIDADE 1

> **Esta pasta é a solução da Atividade 1**, publicada depois do prazo de entrega. Se você ainda está fazendo a atividade, pare aqui e volte ao [roteiro](../atividade01/).

A solução tem duas partes, como a atividade: o documento (`index.html`) e o que se esperava em cada item do relatório.

## O documento

- O código: [`index.html`](index.html).
- A página no ar: <https://fab-araujo.github.io/2026.2-LPS-BSI-PGM/aula01/solucao-atividade01/>.

É **uma** resposta possível. O texto e os produtos da sua podiam ser outros — o conteúdo era escolha sua. O que a correção olhava é a estrutura, e ela é esta:

| O que o Passo 4 pedia | Como fica no código |
|---|---|
| Primeira linha: a declaração de tipo | `<!doctype html>` |
| Elemento raiz com o idioma | `<html lang="pt-BR">` |
| Cabeçalho do documento | `<head>` com `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">` e `<title>` |
| Corpo — topo | `<header>` com o `<h1>` e o `<nav>`; dentro do `<nav>`, uma `<ul>` com dois `<li>`, cada um com um `<a href="#...">` |
| Corpo — meio | um único `<main>`, com duas partes: `<h2 id="apresentacao">` seguido de um `<p>`, e `<h2 id="produtos">` seguido de uma `<ul>` com três `<li>` |
| Corpo — fim | `<footer>` com um `<p>` |

O que faz os links do menu funcionarem é o par `href` / `id`: `href="#produtos"` leva ao elemento que tem `id="produtos"`, letra por letra. Um acento, uma maiúscula ou um `#` a menos, e o clique não faz nada — e o validador não acusa.

A primeira linha de comentário do arquivo (`<!-- SOLUÇÃO DA ATIVIDADE 1 ... -->`) só marca que ele é a solução; não fazia parte do pedido.

## O relatório: o que se esperava em cada item

Os valores abaixo foram observados em 24/09/2026 numa página deste mesmo site, que também é servida pelo GitHub Pages. Na sua, datas, códigos de identificação e alguns valores de cache são outros — o que vale é a leitura de cada linha.

### Item 1 — método, status e cabeçalhos

- **Método `GET`, status `200`**: o navegador pediu o documento e o servidor achou e mandou. Se você digitou o endereço sem a barra do fim, apareceu antes uma linha com **`301`**: o servidor avisou que o endereço certo é o com barra, e o navegador foi para lá sozinho.
- Três cabeçalhos quaisquer, bem explicados, bastavam. Os que apareceram:

| Cabeçalho (exemplo real) | O que informa ao navegador |
|---|---|
| `content-type: text/html; charset=utf-8` | que a resposta é um documento HTML, escrito em UTF-8 — é assim que ele sabe mostrar como página, com os acentos certos |
| `server: GitHub.com` | quem respondeu: o servidor do GitHub |
| `cache-control: max-age=600` | que ele pode guardar e reaproveitar esta resposta por 600 segundos (10 minutos) |
| `expires: ...` | a data e a hora até quando a cópia guardada vale (a hora da resposta mais 10 minutos) |
| `last-modified: ...` | quando o arquivo mudou pela última vez |
| `etag: W/"6ab52798-12b"` | uma marca que identifica esta versão do arquivo; se o arquivo mudar, a marca muda |
| `content-encoding: gzip` | que o arquivo veio comprimido, e o navegador descomprime antes de mostrar |
| `via: 1.1 varnish`, `x-cache: HIT`, `age`, `x-served-by` | que a resposta passou por um servidor de cache no meio do caminho, perto de você; `HIT` quer dizer que veio da cópia guardada lá, e `age` há quantos segundos ela está guardada |

### Item 2 — a página inteira

- **Duas requisições**: o documento e o `favicon.ico`.
- O documento transfere menos de 1 kB. O `favicon.ico` volta com **`404`** e transfere uns 5 kB — é a página de erro do GitHub, maior que o seu documento.
- O `favicon.ico` é o ícone da aba. O navegador o procura sozinho, sem nada no seu código pedir; como você não pôs nenhum, o servidor responde que não existe. Repare que ele é procurado na **raiz** do endereço (`https://<seu-usuário>.github.io/favicon.ico`), e não dentro da pasta do seu repositório.
- A comparação com o site grande: lá são dezenas de requisições (a home da UFRA fez 59), porque cada folha de estilo, cada script e cada imagem é um pedido separado. A sua página não tem nenhum desses — é só o documento.

### Item 3 — o segundo carregamento

- O documento volta com **`304`** (*Not Modified*) e transfere só uns 100 bytes, em vez de todo o arquivo.
- Por quê: no segundo carregamento, o navegador já tem uma cópia e pergunta ao servidor se ela ainda vale. Ele manda de volta a marca que recebeu (`if-none-match`, com o valor do `etag`, e `if-modified-since`, com o do `last-modified`). O arquivo não mudou, então o servidor responde "não mudou" e não manda o conteúdo de novo.
- A linha que explica é o **`etag`** (ou o `last-modified`), com o `cache-control: max-age=600` dizendo por quanto tempo a cópia vale.
- Também está certo se, em alguma linha, apareceu `200` com *(memory cache)* ou *(disk cache)* no lugar do tamanho: aí o navegador nem perguntou, usou a cópia porque ela ainda estava dentro dos 10 minutos.

### Item 4 — o HTTPS

- **Garante:** que a conversa entre o navegador e o servidor vai cifrada — quem está no meio do caminho (o wi-fi, o provedor) não lê nem altera o que passa — e que do outro lado está mesmo o dono do endereço `*.github.io`, porque é isso que o certificado prova.
- **Não garante:** que o conteúdo da página é verdadeiro ou bem-intencionado. Um site de golpe também pode ter cadeado: o HTTPS protege o caminho, não o que o site diz.
- **Quem emitiu:** a **Let's Encrypt**, uma autoridade certificadora gratuita (no certificado, o emissor aparece como `YR1`, que é da Let's Encrypt). O certificado é um só para todos os endereços `*.github.io`, vale cerca de 90 dias e é trocado sozinho.
- **Quem configurou:** o **GitHub**, no GitHub Pages. Você não fez nada — é por isso que o seu endereço já nasceu com `https://`.
