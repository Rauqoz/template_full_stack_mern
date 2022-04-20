const routes = require('express').Router();

routes.get('/', (req, res) => {
	res.status(200).send(true);
});

module.exports = routes;
