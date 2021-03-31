const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/submit', (req, res) => {
    console.log('Username:' + req.body.username)
    console.log('Password:' + req.body.password)
    res.redirect('/')
})
