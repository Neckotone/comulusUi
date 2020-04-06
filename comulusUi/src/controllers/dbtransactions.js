let {Devhub} = require('../model/devhub');
let {GithubAccount} = require('../model/githubAccount');
let {Connection} = require('../model/connections');

module.exports = {
    transactions: {
        devhub: new Devhub,
        githubAccount: new GithubAccount,
        connection: new Connection
    }
}