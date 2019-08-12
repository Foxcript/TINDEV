const express = require('express');
const DevController = require('./controller/DevController');
const likeController = require('./controller/likeController');
const dislikeController = require('./controller/dislikeController');


const routes = express.Router();

  routes.get('/devs', DevController.index);
  routes.post('/devs', DevController.store);

  routes.post('/devs/:devId/likes', likeController.store);
  routes.post('/devs/:devId/dislikes', dislikeController.store);

module.exports = routes;