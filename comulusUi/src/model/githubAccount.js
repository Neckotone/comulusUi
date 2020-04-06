const { dbsql } = require('./dbconect')

class GithubAccount {
    create(account) {
        console.log('el usuario para db: ' + account.gitUser)
        return new Promise((resolve, reject) => {
            let db = dbsql();
            db.run(`INSERT INTO GithubAccounts(GitUser,GitEmail) VALUES (?,?)`, [account.gitUser, account.gitEmail],
                function (err) {
                    if (err) {
                        db.close();
                        console.log(err.message)
                        resolve({
                            detail: 'fail',
                            status: 500,
                            message: err.message
                        })
                    }

                    db.close();
                    console.log('Git Account created successfull')
                    resolve({
                        dtail: 'success',
                        status: 201,
                        message: `A GitAccount has been inserted with rowid ${this.lastID}`,
                        githubAccountID: this.lastID
                    })
                })
        });
    }
}


module.exports = {
    GithubAccount
}