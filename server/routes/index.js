const questionsController = require('../controllers').questions;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Q&A API!',
  }));

  app.get('/api/questions', questionsController.list);
  app.get('/api/sessions', questionsController.listSessions)
  app.get('/api/questions/:id', questionsController.listBySession);
  app.post('/api/question', questionsController.create);
  app.put('/api/like', questionsController.like);
  app.put('/api/unlike', questionsController.unlike);
};