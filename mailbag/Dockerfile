FROM arm64v8/node
WORKDIR /usr/src/app
COPY /server/package*.json ./
COPY /server/serverInfo.json ./server/
COPY /server/dist ./server/dist
COPY /client/dist ./client/dist
RUN npm install --only=prod
EXPOSE 8080
CMD [ "node", "./server/dist/main.js" ]