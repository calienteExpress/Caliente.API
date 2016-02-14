var handlers = require('./handlers');
var Joi = require('joi');
var standardHTTPErrors = [{code: 400, message: "Bad Request"},
  {code: 500, message: "Ruh Roo we made a mistake, Scooby and Shaggy are on it!"}
];

var swaggerConfig  = {
  'hapi-swagger': {
    responseMessages : standardHTTPErrors
  }
}

var routes = [
  {
    method:  'GET',
    path: '/',
    handler: handlers.index
  },
  {
    method: 'GET',
    path: '/MenuItems',
    config : {
      handler: handlers.getMenuItems,
      description: "Gets a collection of menu item documents",
      tags: ['api', 'MenuItems', 'read'],
      plugins : swaggerConfig
    }
  },
  {
    method: 'POST',
    path: '/MenuItems',
    config: {
      handler: handlers.postMenuItem,
      description: "Post a new MenuItem document",
      plugins: swaggerConfig,
      tags: ['api', 'MenuItems', 'create'],
      validate : {
        payload : Joi.object().keys({
          name : Joi.string().required(),
          price : Joi.number(),
          options: Joi.array(Joi.object().keys({
            description : Joi.string(),
            priceOffset : Joi.number()
          })),
          imageUri : Joi.string().uri()
        })
      }
    }
  }
]

exports.routes = routes;
