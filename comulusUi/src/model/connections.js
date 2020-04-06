const { dbsql } = require('./dbconect')

class Connection {
    create(con) {
        let db = dbsql();
        db.run(`INSERT INTO Connections(Github,Devhub)
                VALUES(?,?)`, [con.githubId, con.devhubId], function(err){
                if (err) {
                    db.close();
                    console.log(err.message)
                    return {
                        detail: 'fail',
                        status: 500,
                        message: err.message
                    }
                }

                db.close();
                console.log('connection created successfull')
                return {
                    dtail:'success',
                    status: 201,
                    message: `A connection has been inserted with rowid ${this.lastID}`
                }
            })
    }
}

module.exports ={
    Connection
}