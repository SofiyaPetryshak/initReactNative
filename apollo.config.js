module.exports = {
  client: {
    includes: ['./imports/**/*.js'],
    service: {
      name: 'my-server',
      url: 'http://localhost:4000/graphql',
      // optional disable SSL validation check
      skipSSLValidation: true
    },

  }
};
