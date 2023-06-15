FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn 
COPY . .
RUN yarn build
EXPOSE 3000
ENV PORT 3000
CMD [ "yarn", "run", "dev" ]