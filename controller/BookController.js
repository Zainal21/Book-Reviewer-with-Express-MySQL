
/*

Import object DB from connection

let db = require('../app/config/connection')
*/

let db = require('../app/config/connection')
const _tbl = 'Book'
exports.index = (req, res) => {
  db.query(`SELECT * FROM ${_tbl}`, (error, response) => {
    if(error){
      res.status(404).send({
          'error' : err
      })
    }else{
      res.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: response
        }
      ])
    }
  })
},
exports.show = (req, res) => {
  db.query(`SELECT * FROM ${_tbl}  WHERE id=?`,[request.params.id], (errors, response) => {
    if(err){
      res.status(404).send({
          'error' : err
      })
    }else{
      res.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: response
        }
      ])
    }
  })
},

exports.store =(req, res) => { 
 db.query("INSERT INTO Book SET ?",{
  title:req.body.title, 
  page:req.body.page,
  author:req.body.author, 
  isbn:req.body.isbn, 
  publish_year:req.body.publish_year,
  publisher:req.body.publisher
}, (errors, response) => {
    if(errors){
      response.status(404).send({
          'error' : errors
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok',
            'message' : 'Data Created successfully'
          }
        }
      ])
    }
  })
},
exports.destroy = (req, res) => {
  db.query(`DELETE FROM ${_tbl} WHERE id=?`,[req.params.id], (errors, response) => {
    if(err){
      res.status(404).send({
          'error' : errors
      })
    }else{
      res.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok',
            'messsage' :'Data Deleted'
          },
          data: response
        }
      ])
    }
  })
},

exports.update = (req, res) => {
let data = {
  title:req.body.title, 
  page:req.body.page,
  author:req.body.author, 
  isbn:req.body.isbn, 
  publish_year:req.body.publish_year,
  publisher:req.body.publisher
}
  db.query(`UPDATE ${_tbl} set title=?,page=?,author=?,isbn=?,publish_year=?,publisher=? WHERE id=?`,[data.title,data.page,data.author,data.isbn, data.publish_year,data.publisher,request.params.id], (errors, response) => {
    if(errors){
      response.status(404).send({
          'error' : errors
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: res
        }
      ])
    }
  })
}







/*

Example : for SHOW ALL DATA FROM DATABASE

exports.index = (request, response) => {
  db.query("SELECT * FROM barang", (err, res) => {
    if(err){
      response.status(404).send({
          'error' : err
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: res
        }
      ])
    }
  })
}

*/



/*

Example : for SHOW DATA BY ID DATA FROM DATABASE

exports.show = (request, response) => {
  db.query("SELECT * FROM barang WHERE id=?",[request.params.id], (err, res) => {
    if(err){
      response.status(404).send({
          'error' : err
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: res
        }
      ])
    }
  })
}
*/





/*

Example : for INSERT DATA FROM DATABASE

exports.store =   (request, response) => {
  db.query("INSERT INTO barang(nama) VALUES (?)",[request.body.nama], (err, res) => {
    if(err){
      response.status(404).send({
          'error' : err
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok',
            'message' : 'Data Created successfully'
          }
        }
      ])
    }
  })
}

*/




/*

Example : for UPDATE DATA FROM DATABASE

exports.update = (request, response) => {
  db.query("UPDATE barang set nama=? WHERE id=?",[request.body.nama, request.params.id], (err, res) => {
    if(err){
      response.status(404).send({
          'error' : err
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: res
        }
      ])
    }
  })
}

*/







/*
Example : for DELETE DATA FROM DATABASE

exports.destroy = (request, response) => {
  db.query("DELETE FROM barang WHERE id=?",[request.params.id], (err, res) => {
    if(err){
      response.status(404).send({
          'error' : err
      })
    }else{
      response.status(200).send([
        {
          meta:{
            'code' : 200,
            'status' : 'Ok'
          },
          data: res
        }
      ])
    }
  })
}


*/