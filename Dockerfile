FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./src ./src
RUN npm run build

FROM node:16-alpine
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/build ./build
COPY ./migrations ./migrations
EXPOSE 4000
CMD npm run start
