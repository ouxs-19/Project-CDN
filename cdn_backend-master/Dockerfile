FROM node:18-alpine

COPY dist/ app/

WORKDIR /app

RUN npm install

ENTRYPOINT ["node", "app.js"]