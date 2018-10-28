let { book } = require ('./lib/grades')
let express = require('express')
let app = express()

app.get('/', function(req, res) {
  res.send('Hello World!!')
})

app.get('/grade', function(req, res) {
  let grades = req.query.grades.split(",")
  for (let i = 0; i < grades.length; i++) {
    book.addGrade(parseInt(grades[i]))
  }
  res.send(book.getLetterGrade())
})

app.listen(3000)
console.log('Server running...')
