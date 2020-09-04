/*
  Example  :  REQUIRE DEPEDENCY
  const express = require('express')
  const bodyParser = require('body-parser')
  const app = express();
  const port = 3000;

*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


/*
  Example  :  REQUIRE ROUTE
  const BarangRoutes = require('./resources/routes/barang')
*/


const BookRoute = require('./resources/routes/BookRoute')
const ReviewRoute = require('./resources/routes/ReviewRoute')



/*
  Example  :  REQUIRE body Parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))

*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

/*
  Example  :  USE ENDPOINT BY ROUTE

 app.use('/api/barang', BarangRoute

*/
app.use('/api/book', BookRoute)
app.use('/api/review', ReviewRoute)

/*
  Example  :  LISTEN PORT & RUNNING SERVER

  app.listen(port, () => {
    console.log(`server running in https://localhost:${port}`)
  })
*/

app.listen(port, () => {
  console.log(`server running in https://localhost:${port}`)
})