const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

require('handlebars');


app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})