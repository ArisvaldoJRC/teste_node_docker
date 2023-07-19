FROM node:alpine

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD ["node","./server.js"]