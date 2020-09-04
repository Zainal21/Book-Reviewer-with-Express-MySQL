let db = require('../app/config/connection')


const _tbl = 'Review'
const _tbl2 = 'Book'

exports.index = (req, res) => {
  db.query(`SELECT P1.book_id,P1.id,P1.review,P2.title FROM ${_tbl} P1 JOIN ${_tbl2} P2 ON P1.book_id=P2.id`, (errors, response) => {
    if (errors) {
      response.status(404).send({
        'error': err
      })
    } else {
      res.status(200).send([{
        meta: {
          'code': 200,
          'status': 'Ok',
        },
        data: response
      }])
    }
  })
},
exports.store = (req, res) => {
  db.query(`INSERT INTO ${_tbl} SET ? `, {
    book_id: req.body.book_id,
    review: req.body.review
  }, (errors, response) => {
    if (errors) {
      res.status(404).send({
        'error': errors
      });
    } else {
      res.status(200).send([{
        meta: {
          'code': 200,
          'status': 'Ok',
          'message': 'Review of The Book Added'
        },
        data: response
      }])
    }
  })
},
exports.destroy = (req,res)=> {
  db.query(`DELETE FROM ${_tbl} WHERE id=?`, [req.params.id], (errors, response) => {
    if (errors) {
      res.status(404).send({
        'error': errors
      });
    } else {
      res.status(200).send([{
        meta: {
          'code': 200,
          'status': 'Ok',
          'message': 'Review of The Book Deleted'
        },
        data: response
      }])
    }
  })
},
exports.update = (req,res) => {
  db.query(`UPDATE ${_tbl} SET book_id=?,review=? WHERE id=?`, [req.body.book_id,req.body.review,req.params.id], (errors, response) => {
    if(errors){
      res.status(404).send({
        'error': errors
      });
    } else {
      res.status(200).send([{
        meta: {
          'code': 200,
          'status': 'Ok',
          'message': 'Review of The Book Updated'
        },
        data: response
      }])
    }
  })
}