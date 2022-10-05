FROM node:alpine

WORKDIR /src

ADD package.json /src

RUN npm i --silent

ADD . /src

CMD npm run dev