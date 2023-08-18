# syntax = docker/dockerfile:1.2

FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./

RUN mkdir -p /usr/local/share/.cache/yarn
RUN \
  --mount=type=cache,target=/usr/local/share/.cache/yarn\
  yarn --frozen-lockfile

COPY . .

RUN yarn test
RUN yarn update-variables
RUN yarn docs:build

EXPOSE 4173

ENTRYPOINT ["yarn", "docs:preview"]
