FROM node:16

WORKDIR /musedash_Project/
COPY . /musedash_Project/

RUN yarn install
RUN yarn build:ssr
CMD yarn start