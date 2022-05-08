#Dockerfile, Image, Container
FROM node:16
ADD . .
CMD ["kafka/kafka-api/package.json"]
RUN npm start 

