# Entregas do site

> Status: todas as entregas abaixo foram concluídas. O site não foi publicado; o domínio em `DOMINIO_BASE` é o destino provisório pedido para configuração.

- [x] Base estática e distribuição pronta para Vercel
  - Manter as páginas públicas e os ativos na raiz do projeto, com `index.html`, `servicos/<slug>/index.html` (3), `bairros/<slug>/index.html` (6), `sobre/index.html`, `perguntas-frequentes/index.html`, `politica-de-privacidade/index.html`, `img/`, `style.css`, `tracker.js`, `config.js`, `favicon.svg`, `sitemap.xml`, `robots.txt`, `llms.txt`, `vercel.json`, `apps-script/Code.gs` e `LEIA-ME.txt`.
  - Usar HTML, CSS e JavaScript puros, sem React, Vite, Tailwind ou framework; o texto de cada rota existe no HTML inicial e não depende de renderização por JavaScript.
  - `package.json` usa somente recursos nativos, com `build: node build.js`, sem `dependencies`, `devDependencies` ou `package-lock.json`. `build.js` gera `dist/` e exclui arquivos de desenvolvimento, dependências e metadados internos. `vercel.json` configura `npm run build`, saída `dist`, `cleanUrls: true` e `trailingSlash: true`.
  - Disponibilizar `manus-routes.json` com as 13 rotas públicas. Preparar o repositório para GitHub/Vercel com Framework Preset `Other`; o site continua sem publicação até o usuário importar e publicar.

- [x] Home, navegação e apresentação responsiva
  - A home apresenta, nesta ordem: navegação flutuante em pílula; hero fotográfico com selo, H1, subtítulo e CTAs de WhatsApp/telefone; seletor rápido de local e tema; seção em duas colunas com imagem, selo e três passos; três cards de serviços; quatro diferenciais; links dos seis bairros; cinco FAQs em `details/summary`; faixa final; rodapé em três colunas com o aviso obrigatório.
  - O seletor rápido oferece Centro, Jardim Botânico, Nova Aliança, Vila Tibério, Bonfim Paulista, Campos Elíseos, “Ribeirão Preto (qualquer bairro)” e “Região de Ribeirão Preto”; oferece os três temas e monta mensagem com base nas escolhas.
  - A barra fixa inferior apresenta WhatsApp e telefone em telas abaixo de 760 px e desaparece a partir de 760 px. O layout é mobile-first, sem overflow horizontal no viewport de 360 px.

- [x] Páginas de serviços, bairros e institucionais
  - Entregar 3 páginas de serviço: orientação jurídica sobre bullying; bullying no ambiente escolar; orientação sobre cyberbullying. Cada página contém migalha de pão, H1, foto, botões, pelo menos 250 palavras próprias e úteis, informações para o primeiro contato, fluxo, 2–3 dúvidas próprias, bairros atendidos, links para outros serviços e faixa final com CTAs.
  - Entregar 6 páginas de bairro: Centro, Jardim Botânico, Nova Aliança, Vila Tibério, Bonfim Paulista e Campos Elíseos. Cada página contém migalha de pão, H1, pelo menos 150 palavras realmente próprias, situações típicas alternadas, instruções para pedir, links para serviços e outros bairros, e faixa final. Não afirmar fatos locais sobre ruas, prédios, estabelecimentos, ocorrências ou tempos de deslocamento.
  - Entregar ainda Sobre, Perguntas frequentes com todas as perguntas e respostas do nicho, e Política de privacidade, totalizando 13 páginas. Cada página tem um H1, corpo estático útil e botões nos locais exigidos.

- [x] Redação, contato e limites de publicidade
  - Usar português do Brasil simples, direto, em terceira pessoa e sem tom exagerado. Não inventar endereço, CNPJ, empresa, equipe, avaliações, resultados, qualificação, número de OAB ou especialidade certificada. Não prometer preço, desconto, chegada, atendimento 24 horas, garantia, certificação, avaliação ou resultado. Não escrever como se as fotos fossem do profissional ou da equipe.
  - Usar o nome fornecido apenas como contato: Dr. Daniel Manfrin, telefone/WhatsApp `+55 16 99323-4658`. A origem e o status profissional devem ser confirmados antes da publicação.
  - Reproduzir em todas as páginas o aviso obrigatório: “Este site é um portal de contato e não presta o serviço diretamente. O atendimento é feito por prestadores parceiros da região. Valores, prazos e formas de pagamento são informados pelo prestador no atendimento.”
  - Exibir CTAs informativos de WhatsApp e telefone no topo, corpo e faixa final. O fallback estático e o `config.js` usam o número informado, inclusive sem JavaScript.

- [x] Design, acessibilidade e imagens
  - Usar a direção orgânica e acolhedora aprovada, fundo creme `#fdfbf7`, texto `#23201d`, roxo `#5B21B6`, escuro `#421883`, tintas `#F2EDF9` e `#DED3F0`, WhatsApp `#157a3e`, telefone `#1f2937`, Fira Sans com alternativas de sistema, cartões e botões arredondados.
  - Incluir foco visível, contraste AA (mínimo 4.5:1), alvos de toque de pelo menos 44 px e suporte a `prefers-reduced-motion`.
  - Entregar cinco fotos ilustrativas JPG em `/img`: `hero.jpg` horizontal 1600×900, `sobre.jpg` 1000×750 e uma foto 1000×750 para cada serviço (`orientacao-juridica-bullying.jpg`, `bullying-no-ambiente-escolar.jpg`, `orientacao-cyberbullying.jpg`). Todas têm menos de 150 KB, alt descritivo neutro, dimensões no HTML e carregamento tardio fora da primeira dobra. As imagens não têm texto, logos, marcas, placas legíveis ou rostos em destaque; não representam o profissional, equipe, escritório ou veículo. O guia informa que fotos autorizadas podem substituir os JPGs mantendo os mesmos nomes.

- [x] SEO e GEO
  - Em cada uma das 13 páginas, usar `lang="pt-BR"`, title de até 60 caracteres, description de 120–155 caracteres, canonical absoluto, meta robots `index,follow`, viewport, theme color, favicon, Open Graph e Twitter Card individualizados.
  - Incluir links internos descritivos, hierarquia de títulos, migalhas e `BreadcrumbList` nas páginas internas. Criar `sitemap.xml` com 13 URLs, `lastmod` da data corrente e prioridades de 1.0 (home), 0.8 (serviços) e 0.6 (demais páginas); `robots.txt` libera rastreamento e aponta para o sitemap.
  - Incluir JSON-LD válido: `WebSite` na home; `Service` nas páginas de serviço e bairro com provider `Organization`, areaServed Cidade de Ribeirão Preto/SP; `FAQPage` na home e na página completa, com perguntas e respostas idênticas ao HTML; `BreadcrumbList` nas internas.
  - Criar `llms.txt` em Markdown com resumo, serviços e links, bairros, páginas institucionais e todas as FAQs.

- [x] Contato, rastreamento e integração Apps Script
  - Centralizar no `config.js` site, nicho, WhatsApp, telefone, mensagem, cidade e endpoint fornecido. Manter comentários para troca de número; todas as páginas usam o mesmo contato.
  - Em todo link de WhatsApp incluir `data-acao="whatsapp"`, `data-local` e `data-msg`; em todo link de telefone incluir `data-acao="ligar"` e `data-local`.
  - Copiar `tracker.js` do Anexo A sem alterar a lógica. Em cada clique, enviar GET ao endpoint com `site`, `nicho`, `acao`, `local`, `pagina`, `titulo`, `origem`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `gclid` (“sim” somente quando presente), `dispositivo` (celular/computador), `tela`, `idioma`, `detalhe` e `sessao`; usar `fetch` com `mode: "no-cors"` e `keepalive: true`, com alternativa `Image`.
  - Copiar `apps-script/Code.gs` do Anexo B sem alterações. O script aceita GET desses sites e POST JSON com token, registra os dois formatos nas mesmas 19 colunas da aba `Cliques` e usa o fuso `America/Sao_Paulo`; a coluna Site permite comparar múltiplos sites.
  - Não pedir nem registrar nome, e-mail ou CPF, e não usar cookies de publicidade. Os parâmetros técnicos e a mensagem pré-preenchida são descritos na política de privacidade.

- [x] Política LGPD e guia de implantação
  - A política informa os dados registrados no clique, finalidade de medir contatos e páginas, ausência de identificação direta, tratamento posterior pelo prestador/WhatsApp, direitos de informação/correção/exclusão conforme Lei nº 13.709/2018 (LGPD), canal indicado e data de atualização.
  - O `LEIA-ME.txt` explica a troca dos números no `config.js`; abrir a planilha, Extensões > Apps Script, colar `Code.gs`, executar `setup()` uma vez, editar a implantação existente para uma nova versão com acesso “Qualquer pessoa” e manter a URL `/exec`; criar tabela dinâmica por Site e contagem de Botão/Ação; importar na Vercel com preset Other e saída `dist`; cadastrar o sitemap no Google Search Console; e substituir as imagens mantendo os nomes.
  - O guia destaca que o domínio-base `https://advogadobullyingribeiraopreto.vercel.app` é provisório e deve ser atualizado também em canonical, Open Graph, Twitter, sitemap, robots, llms e JSON-LD quando necessário. Perfil da Empresa no Google somente para prestador que cumpra os requisitos e tenha endereço real elegível.
  - Antes de publicar, confirmar dados profissionais e controlador LGPD e obter revisão do profissional/OAB-SP sobre o modelo de portal, encaminhamento remunerado de contatos e chamadas de contato. As referências oficiais da OAB são fornecidas; o site e o guia não se apresentam como parecer jurídico.
