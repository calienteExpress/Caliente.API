const Hapi = require('hapi');
var routes = require('./routes');
const Swagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const server = new Hapi.Server();

server.connection({port : process.env.PORT || 9001});
server.route(routes.routes);

var swaggerOptions = {
  info: {
    title : 'Caliente API',
    description : 'CRUD operations for Caliente Express App'
  }
};

server.register([
  Inert,
  Vision,
  {
    'register': Swagger,
    'options': swaggerOptions
  }], (err) => {
    if (err) {
      console.log("Swagger error")
    } else {
      console.log("Swagger is loaded")
    }
    server.start(()=>{
      console.log("server is running at: " + server.info.uri);
    });
});
