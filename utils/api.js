const axios = require("axios");

const api = {
  getUser(username) {
    return axios(`https://api.github.com/users/${username}`)
  }
};

module.exports = api;
