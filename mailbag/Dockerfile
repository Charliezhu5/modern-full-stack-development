FROM arm64v8/node:10-alpine
WORKDIR /usr/src/app
COPY /server/package*.json ./
COPY /server/dist ./server/dist
COPY /client/dist ./client/dist
RUN npm install --only=prod
EXPOSE 8080
CMD [ "node", "./server/dist/main.js" ]