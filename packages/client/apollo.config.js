module.exports = {
  client: {
    service: {
      name: 'server',
      url: 'http://localhost:3000/graphql',
    },
    includes: ['src/**/*.vue', 'src/**/*.ts'],
  },
}
