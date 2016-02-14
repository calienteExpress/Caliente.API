const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port : 8888});

server.start(() => {
  console.log('Server running at: ', server.info.uri);
});
