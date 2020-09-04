/*

 Example Object Connection for MYSQL
    const mysql = require('mysql2')

    const conn = mysql.createConnection({
      host:'localhost',
      user: 'root',
      password:'',
      database:'db_barang'
    })

    conn.connect(err => {
      if(err){
        console.log('connection to database failed')
      }
    })
    
    module.exports = conn
*/

const mysql = require('mysql2')

const conn = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'',
  database:'db_book_reviewer'
})

conn.connect(err => {
  if(err){
    console.log('connection to database failed')
  }
})

module.exports = conn