FROM node:alpine

WORKDIR /frontend

CMD npm i && npm run dev -- --host "0.0.0.0"