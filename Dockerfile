FROM node:16

WORKDIR /freeboard/
RUN yarn install

COPY . /freeboard/

RUN yarn build:ssr

RUN mkdir -p ./public/ssr/_next
RUN cp -R ./.next/static ./public/ssr/_next/static

CMD yarn start