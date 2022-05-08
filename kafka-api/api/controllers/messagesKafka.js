module.exports = () => {
  const resultsKafka = [];
  const controller = {};

  controller.listMessagesKafka = (req, res) => {
      const headers = req.headers;
      const username = headers.username;
      const password = headers.password;
      const filterValue = req.body.filterValue;
      const numberMessagesExpected = req.body.numberMessagesExpected;
      const kafkaTopic = req.body.kafkaTopic

      const { Kafka } = require('kafkajs');
      const { uuid } = require('uuidv4');
      const kafka = new Kafka({
          brokers: req.body.brokers,
          authenticationTimeout: 1000,
          reauthenticationThreshold: 10000,
          ssl: true,
          sasl: {
              mechanism: 'scram-sha-512',
              username: username,
              password: password
          },
      })

      console.log(req.body)
      console.log(headers)


      const consumer = kafka.consumer({ groupId: uuid(), maxWaitTimeInMs: 180000 });
      consumer.connect();
      consumer.subscribe({ topic: kafkaTopic, fromBeginning: true })
      consumer.run({
          eachMessage: async({ topic, partition, message }) => {
              if (message.value.toString().includes(filterValue)) {
                  resultsKafka.push(JSON.parse(message.value));
                  console.log("Quantidade de mensagens econtradas:", resultsKafka.length);
              }

              if (numberMessagesExpected == resultsKafka.length) {
                  console.log(resultsKafka);
                  console.log('Tentando parar o consumer');
                  consumer.stop();
                  consumer.disconnect();
                  return res.status(200).json(resultsKafka);
              }
          },
      })
  }

  controller.getMessages = (req, res) => {
      const getJson = { temUmaApiOK: true }
      res.status(200).json(getJson);
  }
  return controller;
}