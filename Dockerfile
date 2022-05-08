#Dockerfile, Image, Container
FROM node:16
ADD . .
COPY . /kafka/kafka-api
WORKDIR /kafka/kafka-api
RUN npm start 

