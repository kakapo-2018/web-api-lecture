const express = require('express')
const server = express()

const routes = require('./routes')

server.use('/', routes)

module.exports = server
