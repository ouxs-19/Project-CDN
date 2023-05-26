FROM node:18-alpine

RUN apk add --no-cache libc6-compat

COPY dist/ app/

WORKDIR /app

RUN yarn --frozen-lockfile
RUN npm ci

RUN yarn build

ENV PORT 3000

ENTRYPOINT ["yarn", "dev"]