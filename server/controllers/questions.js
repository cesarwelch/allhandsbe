const Question = require('../models').question;
const sequelize = require('sequelize');

module.exports = {
	list(req, res) {
		return Question
		.findAll()
		.then(questions => res.status(200).send(questions))
		.catch(error => res.status(400).send(error));
	},
	listBySession(req, res) {
		return Question
		.findAll({
            where: {
            	session: req.params.id
			}
        })
		.then(questions => res.status(200).send(questions))
		.catch(error => res.status(400).send(error));
	},
  listSessions(req, res) {
    return Question
    .findAll({
        attributes: [[sequelize.fn('DISTINCT', sequelize.col('session')), 'session']]})
    .then(questions => res.status(200).send(questions))
    .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    return Question
      .create({
        question: req.body.question,
		session: req.body.session,
		likes: req.body.likes
      })
      .then(question => res.status(201).send(question))
      .catch(error => res.status(400).send(error));
  },
  updateLikes(req, res) {
    return Question
      .update({
		likes: req.body.likes
      }, {
            where: {
                "id": req.body.id
            }
        })
      .then(question => res.status(200).send(question))
      .catch(error => res.status(400).send(error));
  }
};