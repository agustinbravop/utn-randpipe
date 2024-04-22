FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS run

ENV NODE_ENV=production
ENV PORT=80
ENV HOST=0.0.0.0

WORKDIR /app
COPY --from=build /app/build build/
COPY --from=build /app/node_modules node_modules/
COPY --from=build /app/package.json .

ENTRYPOINT ["node", "build"]

EXPOSE 80