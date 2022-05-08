#Dockerfile, Image, Container
FROM node:16
ADD . .
COPY . kafka/kafka/kafka-api
WORKDIR kafka/kafka/kafka-api
RUN npm start 

