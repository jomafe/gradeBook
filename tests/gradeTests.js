let { book } = require('../lib/grades')

exports["setUp"] = function (callback) {
  book.reset()
  callback()
}

exports["Can add a grade"] = function (test) {
  book.addGrade(90)
  let count = book.getCountOfGrades();

  test.equal(count, 1)
  test.done()
}

exports["Can get average grade"] = function (test) {
  book.addGrade(100)
  book.addGrade(50)

  test.equal(75, book.getAverage())
  test.done()
}

exports["Can compute letter grade of A"] = function (test) {
  book.addGrade(100)
  book.addGrade(90)

  test.equal('A', book.getLetterGrade())
  test.done()
}

exports["Can compute letter grade of B"] = function (test) {
  book.addGrade(80)
  book.addGrade(90)

  test.equal('B', book.getLetterGrade())
  test.done()
}

exports["Can compute letter grade of C"] = function (test) {
  book.addGrade(80)
  book.addGrade(70)

  test.equal('C', book.getLetterGrade())
  test.done()
}

exports["Can compute letter grade of D"] = function (test) {
  book.addGrade(70)
  book.addGrade(60)

  test.equal('D', book.getLetterGrade())
  test.done()
}

exports["Can compute letter grade of F"] = function (test) {
  book.addGrade(40)
  book.addGrade(60)

  test.equal('F', book.getLetterGrade())
  test.done()
}
