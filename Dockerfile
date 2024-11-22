FROM node:22.11-alpine

WORKDIR /app

COPY . .

RUN npm install
