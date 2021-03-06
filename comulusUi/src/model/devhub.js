const { dbsql } = require('./dbconect')

class Devhub {
    create(name, isconected, expirationDate) {
        return new Promise((resolve, reject) => {
            let db = dbsql();
            db.run('INSERT INTO devhubs(Name,IsConected,CreationDate) VALUES(?,?,?)',
                [name, isconected, expirationDate], function (err) {
                    if (err) {
                        db.close();
                        console.log(err.message)
                        resolve( {
                            detail: 'fail',
                            status: 500,
                            message: err.message
                        })
                    }
                    db.close();
                    console.log('success insert')
                    resolve( {
                        dtail: 'success',
                        status: 201,
                        message: `A row has been inserted with rowid ${this.lastID}`,
                        devhubId: this.lastID
                    })
                })

        });
    }
}

module.exports = {
    Devhub
}