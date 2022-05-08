FROM node:12
ADD . .
RUN pwd && ls -l
COPY . kafka-front
WORKDIR kafka-front
RUN npm install 
RUN npm run build
