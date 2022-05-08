#Dockerfile, Image, Container
FROM node:16

ADD . .

RUN npm start 

CMD ["kafka"]
