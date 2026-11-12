# Plano de implementação

## Objetivo e escopo

Criar e manter um site estático, multipágina e mobile-first para conteúdo informativo e contato inicial sobre bullying em contexto escolar e cyberbullying entre estudantes em Ribeirão Preto, SP. O nome de marca/título principal da home confirmado pelo usuário é “Advogado contra Bullying nas escolas”. O contato configurado é de Dr. Daniel Manfrin, pelo número +55 16 99323-4658. O projeto será composto por HTML, CSS e JavaScript puro, sem bibliotecas ou framework, e terá 16 páginas indexáveis, imagens ilustrativas originais e documentação de implantação. Por solicitação atual, os cliques em WhatsApp/telefone serão registrados somente nos nove campos listados, e haverá uma página de privacidade separada no rodapé.

O site será preparado para a URL-base provisória `https://advogadobullyingribeiraopreto.vercel.app`. Essa origem estará centralizada no `LEIA-ME.txt` para troca antes da publicação em domínio próprio.

## Limites de conteúdo e conformidade

O site adotará linguagem técnica, clara e sóbria. Não fará promessas de resultado, referências a valores, descontos, prazo de resposta, garantia, avaliações, ranking, endereço, CNPJ, número de OAB, títulos, especialidade certificada, casos concretos ou credenciais não fornecidas. Não será feita a alegação de que Dr. Daniel Manfrin é “especialista”.

A página terá chamadas de contato informativas, evitando expressões de urgência ou estímulo ao litígio. O guia incluirá uma validação necessária antes de publicar: identificação profissional exigida e revisão da compatibilidade do portal de contatos/remuneração de leads com as regras da OAB. Essa indicação é operacional e não substitui orientação ética ou jurídica individual.

## Arquitetura e publicação

As páginas estarão em diretórios com `index.html`, usando URLs com barra final. O `style.css`, `config.js`, `contact.js` e `tracker.js` serão compartilhados. O `config.js` concentrará telefone, WhatsApp, mensagem, cidade e endpoint Apps Script já implantado. O `contact.js` configura links de contato; o `tracker.js` envia, apenas ao clicar, `site`, botão, posição, página sem query e domínio de origem. O Apps Script gera data/hora, dia, hora e dia da semana. Não se envia nome, e-mail, CPF, mensagem, campanha, termo, dispositivo, tela, idioma, cookie ou identificador de sessão.

O projeto terá `package.json` sem dependências e `build.js` nativo do Node, que copia os arquivos públicos para `dist`. O `vercel.json` usará o comando `npm run build`, saída `dist`, `cleanUrls` e `trailingSlash`. O código-fonte está no repositório GitHub conectado; se houver implantação automática da Vercel vinculada à branch `main`, um envio para essa branch poderá atualizar o site público.

## Conteúdo e estrutura

A home e as páginas públicas de conteúdo enquadrarão o tema em situações de bullying nas escolas, sem sugerir ocorrências concretas ou apontar instituições específicas. A home apresentará hero, formulário de pedido informativo, explicação do primeiro contato, três temas de orientação, diferenciais informativos, nove páginas de bairro/região, FAQ, faixa final e rodapé. Serão mantidas três páginas de tema: orientação sobre bullying escolar, situações no ambiente escolar e cyberbullying entre estudantes. As nove páginas de localidade terão textos realmente distintos e sem fatos locais inventados; três delas são novas: Jardim Irajá, Jardim Paulista e Zona Sul. As páginas Sobre, Perguntas frequentes e Política de privacidade completam as 16 URLs públicas. A política explica finalidade, campos, contato do controlador, processamento pela planilha Google, direitos, retenção manual e provedores. Ela será ligada em todos os rodapés.

A atualização solicitada em 12/11/2026 também inclui um link institucional comum para `https://www.danielmanfrin.adv.br/` e links para as Leis nº 13.185/2015 e nº 14.811/2024 no Planalto, como referências públicas de leitura. A estratégia é facilitar o acesso ao site profissional e a fontes primárias sem reproduzir alegações, métricas ou qualificações não verificadas neste portal. Como o usuário explicitou que o objetivo é atrair contatos para advocacia, o guia manterá alerta destacado para revisão do modelo e das chamadas à luz das regras de publicidade da OAB/SP antes da publicação.

Cada página terá texto já presente no HTML, metadados individuais, `canonical`, Open Graph, Twitter Card, um H1, links internos e JSON-LD aplicável. `sitemap.xml`, `robots.txt`, `llms.txt` e `manus-routes.json` manterão o conjunto de URLs sincronizado, incluindo a página de privacidade.

## Design

A direção escolhida é um **editorial acolhedor e discreto**, adequada a uma página de orientação jurídica em tema sensível. O layout parte de blocos orgânicos e espaçados, pílulas de navegação, cartões suaves, alto contraste e imagens cotidianas neutras. A paleta combina fundo creme com roxo profundo `#5B21B6`, roxo escuro `#421883` e variações claras `#F2EDF9` e `#DED3F0`; verde é reservado para o contato por WhatsApp.

A assinatura visual usa uma barra flutuante branca, selo translúcido no hero, moldura fotográfica clara e bordas amplamente arredondadas. A interação será com transições sutis, foco visível e respeito a `prefers-reduced-motion`. A tipografia principal será Fira Sans com alternativas do sistema. O logotipo será um wordmark simples com um pequeno marcador circular, sem criar marca que pareça uma insígnia oficial.

## Mídia

Serão geradas cinco fotografias JPG originais com uso definido: hero horizontal, uma imagem de contexto e uma para cada tema. As cenas serão neutras, sem texto, logos, placas legíveis ou pessoas identificáveis. As imagens serão compactadas para uso local em `/img` e poderão ser substituídas no futuro pelos mesmos nomes de arquivo.

## Fluxo de trabalho

Após a aprovação deste plano, foram configurados diagnósticos de HTML/CSS/JS, criados `TODO.md` e os arquivos do projeto; o conteúdo e as imagens foram produzidos e as verificações de estrutura, metadados, JSON-LD, links internos e build passaram. O usuário voltou a autorizar o registro mínimo de cliques e solicitou uma página de privacidade separada no rodapé. A implementação local transmite somente os campos autorizados e não registra fora do clique nos botões. O controlador confirmou legítimo interesse, retenção até exclusão manual e acesso exclusivo à planilha. A página informa esses fatos e descreve que a avaliação do legítimo interesse deve ser mantida pelo controlador. Após as verificações, enviar para GitHub `main` e conferir a implantação Vercel no domínio público.
