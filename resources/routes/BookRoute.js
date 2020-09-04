/*

Example : REQUIRED DEPENDENCY 
const express = require('express')
const route = express.Router()

*/
const express = require('express')
const route = express.Router()


/*
Example : REQUIRED CONTROLLER 

const BarangController = require('../../controller/BarangController')

*/

const BookController = require('../../controller/BookController')

/*

Example : ROUTE ENDPOINT 

route.get('/', BarangController.index)
route.post('/', BarangController.store)
route.get('/:id', BarangController.show)
route.put('/:id', BarangController.update)
route.delete('/:id', BarangController.destroy)

module.exports = route
*/


route.get('/', BookController.index)
route.post('/', BookController.store)
route.get('/:id', BookController.show)
route.put('/:id', BookController.update)
route.delete('/:id', BookController.destroy)

module.exports = route