#Dockerfile, Image, Container
FROM node:16
ADD . .
CMD ["kafka/kafka-api"]
RUN npm start 

