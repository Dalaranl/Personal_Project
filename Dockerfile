FROM node:16

WORKDIR /freeboard/
COPY . /freeboard/

RUN yarn install
RUN yarn build:ssr
CMD yarn start