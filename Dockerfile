FROM node:14.8.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . /app
EXPOSE 80
CMD ["npm","start"]