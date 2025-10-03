FROM node:20-bullseye
WORKDIR /web
COPY package*.json ./
RUN npm install
EXPOSE 5173
CMD [ "npm", "run", "dev" ]