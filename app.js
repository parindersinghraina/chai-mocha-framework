//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Chai-Mocha Test App')
})

//Launch listening server on port 2222
app.listen(2222, function () {
  console.log('App listening on port 2222!')
})