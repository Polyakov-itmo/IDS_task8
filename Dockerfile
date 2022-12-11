FROM node:12.13-alpine

WORKDIR /app

COPY /*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]
