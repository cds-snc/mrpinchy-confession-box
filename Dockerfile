FROM node:10-alpine
MAINTAINER Eva Demers-Brett <eva.demers-brett@tbs-sct.gc.ca>
LABEL Description="Demo application to be paired with Compliance API"

WORKDIR /app
ADD . .

RUN yarn install && yarn build
USER node

EXPOSE 3000
CMD yarn start