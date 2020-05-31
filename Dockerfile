FROM node:alpine
WORKDIR /app
ADD . .
RUN npm install --silent
RUN npm run build
EXPOSE 5000
ENTRYPOINT ["npm", "run", "serve"]