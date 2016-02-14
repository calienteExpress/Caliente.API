var handlers = require('./handlers');
var joi = require('Joi');
var standardHTTPErrors = [{code: 400, message: "Bad Request"},
  {code: 500, message: "Ruh Roo We made a mistake, Scooby and Shaggy are on it!"}
];

var routes = [
  {
    method:  'GET',
    path: '/',
    handler = handlers.index
  },
  {
    method: 'GET',
    path: '/MenuItems',
    config : {
      handler: handlers.getMenuItems,
      description: "Gets a collection of menu item documents"

    }

  }
]

exports.routes = routes;
