const { Router } = require('express');
const LocationController = require('./app/controllers/LocationController');

const routes = Router();

routes.get('/', (req, res) => res.json({ status: 'running' }));

routes.get('/locations', LocationController.index);

routes.get('/locations/last', LocationController.show);

routes.post('/locations', LocationController.store);

module.exports = routes;
