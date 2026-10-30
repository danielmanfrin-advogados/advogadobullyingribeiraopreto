# Plano de implementação

## Objetivo e escopo

Criar um site estático, multipágina e mobile-first para conteúdo informativo e contato inicial sobre situações de bullying e cyberbullying em Ribeirão Preto, SP. O contato configurado é de Dr. Daniel Manfrin, pelo número +55 16 99323-4658. O projeto será composto por HTML, CSS e JavaScript puro, sem bibliotecas ou framework, e terá 13 páginas indexáveis, imagens ilustrativas originais, documentação de implantação e código de registro de cliques no Google Apps Script.

O site será preparado para a URL-base provisória `https://advogadobullyingribeiraopreto.vercel.app`. Essa origem estará centralizada no `LEIA-ME.txt` para troca antes da publicação em domínio próprio.

## Limites de conteúdo e conformidade

O site adotará linguagem técnica, clara e sóbria. Não fará promessas de resultado, referências a valores, descontos, prazo de resposta, garantia, avaliações, ranking, endereço, CNPJ, número de OAB, títulos, especialidade certificada, casos concretos ou credenciais não fornecidas. O termo de busca será “advogado para bullying”; não será feita a alegação de que Dr. Daniel Manfrin é “especialista”.

A página terá chamadas de contato informativas, evitando expressões de urgência ou estímulo ao litígio. O guia incluirá uma validação necessária antes de publicar: identificação profissional exigida, dados do controlador da política de privacidade e revisão da compatibilidade do portal de contatos/remuneração de leads com as regras da OAB. Essa indicação é operacional e não substitui orientação ética ou jurídica individual.

## Arquitetura e publicação

As páginas estarão em diretórios com `index.html`, usando URLs com barra final. O `style.css`, `config.js` e `tracker.js` serão compartilhados. O `config.js` concentrará o telefone e WhatsApp. O `tracker.js` seguirá a lógica fornecida para atualizar links e registrar cliques ao endpoint do Apps Script.

O projeto terá `package.json` sem dependências e `build.js` nativo do Node, que copia os arquivos públicos para `dist`. O `vercel.json` usará o comando `npm run build`, saída `dist`, `cleanUrls` e `trailingSlash`. O projeto não será publicado automaticamente.

## Conteúdo e estrutura

A home apresentará hero, formulário de pedido informativo, explicação do primeiro contato, três temas de orientação, diferenciais informativos, bairros, FAQ, faixa final e rodapé. Serão criadas três páginas de tema: orientação em situações de bullying, situações em ambiente escolar e orientação sobre cyberbullying. Seis páginas de bairro terão textos realmente distintos e sem fatos locais inventados. As páginas Sobre, Perguntas frequentes e Política de privacidade completarão as 13 URLs públicas.

Cada página terá texto já presente no HTML, metadados individuais, `canonical`, Open Graph, Twitter Card, um H1, links internos e JSON-LD aplicável. `sitemap.xml`, `robots.txt`, `llms.txt` e `manus-routes.json` manterão o conjunto de URLs sincronizado.

## Design

A direção escolhida é um **editorial acolhedor e discreto**, adequada a uma página de orientação jurídica em tema sensível. O layout parte de blocos orgânicos e espaçados, pílulas de navegação, cartões suaves, alto contraste e imagens cotidianas neutras. A paleta combina fundo creme com roxo profundo `#5B21B6`, roxo escuro `#421883` e variações claras `#F2EDF9` e `#DED3F0`; verde é reservado para o contato por WhatsApp.

A assinatura visual usa uma barra flutuante branca, selo translúcido no hero, moldura fotográfica clara e bordas amplamente arredondadas. A interação será com transições sutis, foco visível e respeito a `prefers-reduced-motion`. A tipografia principal será Fira Sans com alternativas do sistema. O logotipo será um wordmark simples com um pequeno marcador circular, sem criar marca que pareça uma insígnia oficial.

## Mídia

Serão geradas cinco fotografias JPG originais com uso definido: hero horizontal, uma imagem de contexto e uma para cada tema. As cenas serão neutras, sem texto, logos, placas legíveis ou pessoas identificáveis. As imagens serão compactadas para uso local em `/img` e poderão ser substituídas no futuro pelos mesmos nomes de arquivo.

## Fluxo de trabalho

Após a aprovação deste plano, serão configurados diagnósticos de HTML/CSS/JS, criados `TODO.md` e todos os arquivos do projeto. Em seguida serão geradas as imagens, produzido o conteúdo, iniciada uma prévia local e realizadas verificações de estrutura, metadados, JSON-LD, links internos, build e responsividade. O resultado será entregue como diretório completo pronto para GitHub e Vercel, sem publicação externa.
