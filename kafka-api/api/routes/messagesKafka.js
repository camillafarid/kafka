module.exports = app => {
    const controller = app.controllers.messagesKafka;
  
    app.route('/api/v1/messages-kafka')
      .get(controller.getMessages)
      .post(controller.listMessagesKafka);
  }