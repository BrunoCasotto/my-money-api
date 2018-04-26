require('module-alias/register')
const Hapi = require('hapi')
const Path = require('path')
const Hoek = require('hoek')

const server = Hapi.server({
  port: 4040,
  host: 'localhost'
});

server.route.state = {
  parse: true,
  failAction: "ignore",
  connections: {
    state: {
      strictHeader: false
    }
  }
}

server.route([
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, world!';
    }
  },
  {
    method: 'GET',
    path: '/transactions',
    handler: (request, h) => {
      return 'Hello, Transactions!';
    }
  }
]);

server.bind({
  var: 'content'
})

server.start(err => {
  if (err) {
      console.log(err)
  }
  console.log(`Server running at: ${server.info.uri}`);
})