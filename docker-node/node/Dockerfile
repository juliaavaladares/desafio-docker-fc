FROM node:18 AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]

# ENTRYPOINT [ "dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "node", "index.js" ]