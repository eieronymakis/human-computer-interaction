FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install --quiet
RUN npm install nodemon --quiet --only=dev
COPY . .
CMD [ "npm", "run", "start:dev" ]