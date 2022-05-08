#Dockerfile, Image, Container
FROM debian

ADD . .

RUN npm start 

CMD ["kafka"]
