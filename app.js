// express
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

// express handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

//mongoose
require('./config/mongoose')

//body-parser
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})