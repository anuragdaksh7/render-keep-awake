ARG NODE_VERSION=21.5.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]