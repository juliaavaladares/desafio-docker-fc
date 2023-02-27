FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]

# ENTRYPOINT [ "dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "node", "index.js" ]