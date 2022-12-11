FROM node:12.13-alpine

WORKDIR /app

COPY /*.json ./

RUN npm install

RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 8080

