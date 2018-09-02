const request = require('superagent')
// 
// <form method="post" action="/cats">
//
// </form>

// POST - CREATE
// GET - READ
//
// PUT - UPDATE
// DELETE <-

request
  .put('http://localhost:3000/cats')
  .then(res => {
    console.log(typeof res.text);
    console.log(typeof res.body);
  })
  .catch(err => {
    console.log(err)
  })
