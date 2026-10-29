# APEX Clube de Ofertas — entrega para desenvolvimento

Landing page responsiva do APEX Clube de Ofertas, construída com React, TypeScript, Vite e Tailwind CSS.

## Rodar localmente

1. Instale uma versão LTS atual do Node.js.
2. Na pasta do projeto, execute `npm ci`.
3. Copie `.env.example` para `.env.local` se quiser definir o destino do botão do WhatsApp.
4. Execute `npm run dev` para abrir a página local.
5. Antes de publicar, execute `npm run build`.

## Configurações principais

- `VITE_LINKWPP`: convite principal da comunidade, usado pelos botões gerais do site.
- Convites específicos de tecnologia, moda masculina, moda feminina e fitness: configurados em `src/App.tsx`, cada um no departamento correspondente.
- Instagram e TikTok: endereços configurados em `src/data/links.ts`.
- Categorias, conteúdo, perguntas frequentes e interações: `src/App.tsx`.
- Identidade visual e responsividade: `src/index.css`.
- Título, descrição e compartilhamento social: `index.html`.

## Identidade visual

- Paleta principal: vermelho `#c30000`, branco e preto/grafite.
- Os destaques do radar acompanham o departamento ativo: moda masculina em azul `#004AAD`, moda feminina em rosa `#CB6CE6` e saúde & fitness em verde `#00BF63`. A mudança ocorre no próprio painel, com transição animada e sem recarregar a página.
- A página usa exclusivamente o tema escuro. A cor do departamento ativo também atualiza os destaques do restante do site.
- O fundo recebe gradientes vermelhos sutis que se deslocam e desaparecem continuamente. A animação respeita a preferência do sistema por movimento reduzido.
- Os gradientes animados mudam suavemente para a cor do departamento selecionado.
- Cabeçalho e rodapé usam a versão escura da logo.
- Os detalhes ciano foram alinhados ao vermelho da marca.

## Imagens

- `public/product-showcase-v1.png`: composição visual de PS5, iPhone e tênis Nike usada no hero.
- `public/product-showcase-mens-v1.png`, `public/product-showcase-womens-v1.png` e `public/product-showcase-fitness-v1.png`: composições do hero para moda masculina, moda feminina e saúde & fitness; a imagem acompanha o departamento selecionado com uma entrada animada.
- `public/mascot-v2.png`: mascote original preservado para uso futuro.
- `public/apex-wordmark-dark.png` e `public/apex-wordmark-light.png`: versões da logo horizontal para os dois temas.
- `public/apex_logo.svg`: marca vetorial que já existia no projeto.

## Copy e conteúdo

- A comunicação agora destaca monitoramento 24/7, curadoria rigorosa e alertas de ofertas verificadas.
- A seção de departamentos, o método APEX, a chamada final e as respostas do FAQ seguem as alterações do novo briefing.
- A tipografia usa uma escala responsiva com fontes do sistema, tamanhos maiores para leitura e entrelinhas mais abertas.
- A prévia estática em `preview.html` acompanha a página, com os quatro departamentos, seus convites próprios do WhatsApp, tema escuro e FAQ interativo.

As imagens do hero estão associadas a cada departamento em `src/App.tsx`; o site carrega assets da pasta `public` pela raiz, por exemplo `/product-showcase-v1.png`.

## Prévia

`preview.html` é uma prévia estática independente com os filtros de categoria e FAQ interativos. `preview-mobile.html` mostra essa mesma página em uma moldura de telefone para revisão visual. As duas prévias ficam na raiz do projeto e usam a imagem em `public/product-showcase-v1.png`.

## Validação

`npm run build` foi executado com sucesso; TypeScript e Vite concluíram a compilação de produção sem erros.
