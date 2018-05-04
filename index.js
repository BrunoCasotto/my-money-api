require('module-alias/register')
const Hapi = require('hapi')
const Path = require('path')
const Hoek = require('hoek')
const routes = require('@routes')

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

server.route(routes)

server.bind({
  var: 'content'
})

server.start(err => {
  if (err) {
      console.log(err)
  }
  console.log(`Server running at: ${server.info.uri}`)
})

module.exports = {
  server: server,
  close: server.close
}