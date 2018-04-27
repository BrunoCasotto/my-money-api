module.exports = [
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
]