# Entregas do site

> Status: o foco escolar, as páginas locais, os links para fontes e o título da home seguem preservados. O registro mínimo e a página de privacidade foram implementados e validados localmente; este envio ao GitHub acionará a implantação, cuja conclusão será verificada separadamente.

- [x] Base estática e distribuição pronta para Vercel
  - Manter as páginas públicas e os ativos na raiz do projeto, com `index.html`, `servicos/<slug>/index.html` (3), `bairros/<slug>/index.html` (9), `sobre/index.html`, `perguntas-frequentes/index.html`, `politica-de-privacidade/index.html`, `img/`, `style.css`, `contact.js`, `tracker.js`, `config.js`, `favicon.svg`, `sitemap.xml`, `robots.txt`, `llms.txt`, `vercel.json` e `LEIA-ME.txt`. O `config.js` usa o endpoint Apps Script já implantado; não incluir na saída outros scripts de gestão.
  - Usar HTML, CSS e JavaScript puros, sem React, Vite, Tailwind ou framework; o texto de cada rota existe no HTML inicial e não depende de renderização por JavaScript.
  - `package.json` usa somente recursos nativos, com `build: node build.js`, sem `dependencies`, `devDependencies` ou `package-lock.json`. `build.js` gera `dist/` e exclui arquivos de desenvolvimento, dependências e metadados internos. `vercel.json` configura `npm run build`, saída `dist`, `cleanUrls: true` e `trailingSlash: true`.
  - Disponibilizar `manus-routes.json` com as 16 rotas públicas. Preparar o repositório para GitHub/Vercel com Framework Preset `Other`.

- [x] Home, navegação e apresentação responsiva
  - A home apresenta, nesta ordem: navegação flutuante em pílula; hero fotográfico com selo, H1, subtítulo e CTAs de WhatsApp/telefone; seletor rápido de local e tema; seção em duas colunas com imagem, selo e três passos; três cards de serviços; quatro diferenciais; links das nove páginas de bairro/região; cinco FAQs em `details/summary`; faixa final; rodapé em três colunas com o aviso obrigatório.
  - O seletor rápido oferece Centro, Jardim Botânico, Jardim Nova Aliança, Vila Tibério, Bonfim Paulista, Campos Elíseos, Jardim Irajá, Jardim Paulista, “Ribeirão Preto (qualquer bairro)” e “Região de Ribeirão Preto”; oferece os três temas e monta mensagem com base nas escolhas.
  - A barra fixa inferior apresenta WhatsApp e telefone em telas abaixo de 760 px e desaparece a partir de 760 px. O layout é mobile-first, sem overflow horizontal no viewport de 360 px.

- [x] Páginas de serviços, bairros e institucionais
  - Entregar 3 páginas de serviço: orientação sobre bullying escolar; bullying no ambiente escolar; cyberbullying entre estudantes. Cada página contém migalha de pão, H1, foto, botões, pelo menos 250 palavras próprias e úteis, informações para o primeiro contato, fluxo, 2–3 dúvidas próprias, bairros atendidos, links para outros serviços e faixa final com CTAs.
  - Entregar 9 páginas de bairro/região: Centro, Jardim Botânico, Nova Aliança, Vila Tibério, Bonfim Paulista, Campos Elíseos, Jardim Irajá, Jardim Paulista e Zona Sul de Ribeirão Preto. Cada página contém migalha de pão, H1, pelo menos 150 palavras realmente próprias, situações típicas alternadas, instruções para pedir, links para serviços e outras localidades, e faixa final. Não afirmar fatos locais sobre ruas, prédios, estabelecimentos, ocorrências ou tempos de deslocamento.
  - Entregar ainda Sobre, Perguntas frequentes com todas as perguntas e respostas do nicho, totalizando 16 páginas, incluindo a política de privacidade separada e ligada no rodapé. Cada página tem um H1, corpo estático útil e botões nos locais exigidos.

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
  - Em cada uma das 16 páginas, usar `lang="pt-BR"`, title de até 60 caracteres, description de 120–155 caracteres, canonical absoluto, meta robots `index,follow`, viewport, theme color, favicon, Open Graph e Twitter Card individualizados.
  - Incluir links internos descritivos, hierarquia de títulos, migalhas e `BreadcrumbList` nas páginas internas. Criar `sitemap.xml` com 16 URLs, `lastmod` da data corrente e prioridades de 1.0 (home), 0.8 (serviços) e 0.6 (demais páginas); `robots.txt` libera rastreamento e aponta para o sitemap.
  - Incluir JSON-LD válido: `WebSite` na home; `Service` nas páginas de serviço e bairro com provider `Organization`, areaServed Cidade de Ribeirão Preto/SP; `FAQPage` na home e na página completa, com perguntas e respostas idênticas ao HTML; `BreadcrumbList` nas internas.
  - Criar `llms.txt` em Markdown com resumo, serviços e links, bairros, páginas institucionais e todas as FAQs.

- [x] Nome do site e título principal para buscas
  - Usar “Advogado contra Bullying nas escolas” no nome `WebSite` do JSON-LD da home, no `og:site_name` de todas as 16 páginas, na marca visível e no manifesto de rotas. Nas páginas de conteúdo, usar o nome no `<title>`, H1, `og:title` e Twitter title; a política de privacidade mantém título próprio. O Google automatiza a seleção do nome e do título do resultado; a atualização depende de recrawl e não garante que ele mostre imediatamente o texto preferido.

- [x] Contato com registro mínimo de cliques, conforme solicitação de 12/11/2026
  - Centralizar no `config.js` WhatsApp, telefone, mensagem, cidade e endpoint Apps Script já implantado. `contact.js` configura os links e a mensagem rápida.
  - `tracker.js` registra somente cliques em WhatsApp/telefone e transmite apenas `site`, `acao`, `local`, `pagina` sem query e `origem` como domínio de referência ou “direto”. O Apps Script calcula Data e hora, Dia, Hora e Dia da semana. Nenhum nome, e-mail, CPF, conteúdo da mensagem, campanha, termo, dispositivo, tela, idioma, cookie ou identificador de sessão é enviado para a planilha.
  - As nove colunas preenchidas são: Data e hora, Dia, Hora, Dia da semana, Site, Botão, Posição, Página e Origem. O site não chama o endpoint fora do clique do usuário.
  - O sistema atual não exclui linhas automaticamente; o controlador deve rever periodicamente a retenção e as permissões de acesso da planilha.
- [x] Política de privacidade e transparência
  - Disponibilizar `/politica-de-privacidade/` como página estática separada, com link e aviso visível em todos os rodapés, explicando controlador Dr. Daniel Manfrin, contato para direitos via WhatsApp `+55 16 99323-4658`, os nove campos de registro, finalidade, fluxo para Google Apps Script/Sheets, retenção manual e provedores Vercel/Google/WhatsApp.
  - Incluir a LGPD, direitos do titular e links para as políticas dos provedores; não afirmar que o site é anônimo nem presumir a base legal. A base legal por legítimo interesse, a retenção até exclusão manual e o acesso restrito ao controlador foram confirmados pelo usuário; manter avaliação da finalidade e permissões sob responsabilidade do controlador.
  - Adicionar a rota aos metadados, breadcrumb, `manus-routes.json`, `sitemap.xml`, `llms.txt` e build. O resultado deve ter 16 páginas públicas.

- [x] Guia de implantação atualizado
  - O `LEIA-ME.txt` explica troca dos números no `config.js`, atualização de páginas, build estático e fluxo Vercel/GitHub. O guia descreve o registro mínimo de cliques solicitado e a política separada; o endpoint de planilha já implantado é referenciado no `config.js`.
  - O guia mantém cautelas de publicidade jurídica e não inventa dados profissionais, endereço ou resultados.
  - O guia destaca que o domínio-base `https://advogadobullyingribeiraopreto.vercel.app` é provisório e deve ser atualizado também em canonical, Open Graph, Twitter, sitemap, robots, llms e JSON-LD quando necessário. Perfil da Empresa no Google somente para prestador que cumpra os requisitos e tenha endereço real elegível.
  - Antes de publicar, confirmar dados profissionais e obter revisão do profissional/OAB-SP sobre o modelo de portal, encaminhamento remunerado de contatos e chamadas de contato. As referências oficiais da OAB são fornecidas; o site e o guia não se apresentam como parecer jurídico.

- [x] Atualização solicitada em 12/11/2026: foco escolar e novas páginas locais
  - Referir os temas públicos a situações de bullying em escolas; tratar o cyberbullying como situação potencialmente ligada à convivência escolar sem afirmar que todo conflito online é bullying. Não atribuir ocorrência a uma escola identificável, não inventar vínculo comercial com escola e não insinuar que exista um caso no bairro.
  - Atualizar títulos, descriptions, H1, copy, mensagens pré-preenchidas, FAQ e respectivos JSON-LD, links internos, `llms.txt`, `manus-routes.json` e `sitemap.xml` para refletirem o foco escolar. Manter conteúdo próprio, informativo e cuidadoso.
  - Acrescentar páginas estáticas úteis para bullying em escola no Jardim Irajá, Jardim Paulista e Zona Sul de Ribeirão Preto; manter a página do Jardim Botânico expressamente alinhada ao exemplo solicitado. Incluir as novas rotas na navegação interna e no build de `dist`.
  - Usar apenas referências oficiais para confirmar as localidades pesquisadas: Prefeitura de Ribeirão Preto (lista de escolas particulares autorizadas de Educação Infantil, com Jardim Irajá e Jardim Paulista) e página da unidade Vargas do Colégio Objetivo (Jardim Nova Aliança/Zona Sul). Não citar escolas como envolvidas em incidentes.
  - Incluir em todos os rodapés um link visível ao site profissional oficial `https://www.danielmanfrin.adv.br/`, sem `nofollow`, e incluir na página Sobre referências clicáveis ao Planalto para a Lei nº 13.185/2015 e a Lei nº 14.811/2024. Apresentar as normas como fontes de leitura, com ressalva de que o conteúdo é geral e não substitui análise individual.
  - Não copiar alegações, números de desempenho, avaliações ou qualificações do site profissional para este portal. Manter no guia a nota de que o objetivo de captação de contatos exige revisão do formato e das chamadas comerciais pelo profissional e pela OAB/SP antes da publicação.

- [x] Atualização solicitada em 12/11/2026: imagem profissional na home
  - Substituir somente na página inicial a imagem do card de cyberbullying que mostra um celular em destaque por uma imagem escolar profissional e acolhedora, sem telefone ou telas; atualizar o texto alternativo; manter as páginas internas, o layout compartilhado e os demais conteúdos inalterados. Fazer build e prévia locais; não enviar ao GitHub nem publicar sem nova aprovação.
