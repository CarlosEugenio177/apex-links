# APEX Offers Club — entrega para desenvolvimento

Landing page responsiva do APEX Offers Club, construída com React, TypeScript, Vite e Tailwind CSS.

## Rodar localmente

1. Instale uma versão LTS atual do Node.js.
2. Na pasta do projeto, execute `npm ci`.
3. Copie `.env.example` para `.env.local` se quiser definir o destino do botão do WhatsApp.
4. Execute `npm run dev` para abrir a página local.
5. Antes de publicar, execute `npm run build`.

## Configurações principais

- `VITE_LINKWPP`: URL do grupo de WhatsApp. Sem essa variável, o site usa o link público atualmente configurado como fallback. Confirme que o convite continua ativo antes da publicação.
- Instagram: endereço configurado em `src/data/links.ts`.
- Categorias, conteúdo, perguntas frequentes e interações: `src/App.tsx`.
- Identidade visual e responsividade: `src/index.css`.
- Título, descrição e compartilhamento social: `index.html`.

## Imagens

- `public/product-showcase-v1.png`: composição visual de PS5, iPhone e tênis Nike usada no hero.
- `public/mascot-v2.png`: mascote original preservado para uso futuro.
- `public/apex_logo.svg`: marca vetorial existente.

Para trocar a composição do hero sem alterar o código, substitua `public/product-showcase-v1.png` mantendo o mesmo nome e proporção. O site carrega assets da pasta `public` pela raiz, por exemplo `/product-showcase-v1.png`.

## Prévia

`preview.html` é uma prévia estática independente com os filtros de categoria e FAQ interativos. Para abri-la em um servidor estático a partir da raiz do projeto, use `/preview.html`; ela busca a imagem em `public/product-showcase-v1.png`.

## Validação

`npm run build` foi executado com sucesso; TypeScript e Vite concluíram a compilação de produção sem erros.
