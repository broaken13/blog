FROM node:20 as build

WORKDIR /app

COPY package.json package-lock.json index.html tailwind.config.js postcss.config.js tsconfig.* vite.config.ts /app

COPY src/ /app/src/
COPY public/ /app/public/

RUN npm install
RUN npm run build

FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html
