const express = require('express')
const app = express.Router();

const ReviewController = require('../../controller/ReviewController')

app.get('/', ReviewController.index)
app.post('/',ReviewController.store)
app.put('/:id',ReviewController.update)
app.delete('/:id',ReviewController.destroy)

module.exports = app