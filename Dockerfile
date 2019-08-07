FROM node:latest

ENV APP_ROOT /src

RUN mkdir -p /usr/src/zoala
WORKDIR /usr/src/zoala

ADD . /usr/src/zoala

RUN npm ci
RUN npm run dev

EXPOSE 5000

ENV NUXT_HOST 0.0.0.0

ENV NUXT_PORT=5000

CMD [ "npm", "run", "start" ]