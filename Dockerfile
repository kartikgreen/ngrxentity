FROM node:8.7.0-alpine

RUN mkdir -p /s2capp
WORKDIR /s2capp
COPY package.json /s2capp/package.json
RUN ["yarn"]
COPY . /s2capp
EXPOSE 4200/tcp
 CMD ["yarn", "start"]