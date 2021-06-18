FROM node:16-alpine3.11

WORKDIR /app

COPY . .
RUN ls -lha
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
