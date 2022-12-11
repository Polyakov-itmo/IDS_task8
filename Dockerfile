FROM node:12.13-alpine

WORKDIR /app

COPY /*.json ./

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]



