const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Leslie is a cat')
})

router.get('/cats', (req, res) => {
  const cats = [
    {name: 'Harrison'},
    {name: 'Engie'}
  ]
  res.json(cats)
})

module.exports = router
