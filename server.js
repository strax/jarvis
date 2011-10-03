var express = require('express')
  , app = express.createServer()

app.post('/hook', function(req, res) {
  
})

var PORT = 8080
app.listen(PORT)
console.log("> jarvis server on port " + PORT)