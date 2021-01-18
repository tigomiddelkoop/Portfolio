FROM node:14.15.4-alpine3.10

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
CMD npm run build && npm run start
