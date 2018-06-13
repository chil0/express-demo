const express = require('express')
const pug = require('pug')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/list', function(req, res) {
  res.render('list', {list: [
    {id: 1, name: "zzz"},
    {id: 2, name: "xxx"}
  ]})
})

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})