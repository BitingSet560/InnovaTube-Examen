FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist/front-end/browser", "-p", "8080"]
