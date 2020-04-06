const { dbsql} = require('./dbconect')

class Devhub {
    create(name, isconected, expirationDate) {
        let db = dbsql();
        db.run('INSERT INTO devhubs(Name,IsConected,CreationDate) VALUES(?,?,?)', 
        [name, isconected, expirationDate], (err) => {
            if(err){
                db.close();
                console.log(err.message)
                return {
                    detail:'fail',
                    status: 500,
                    message: err.message
                }
            }
            db.close();
            console.log('success insert')
            return {
                dtail:'success',
                status: 201,
                message: `A row has been inserted with rowid ${this.lastID}`
            }
        })
    }
}

module.exports ={
    Devhub
}