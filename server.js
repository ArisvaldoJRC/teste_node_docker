const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Olá Mundo')
})

app.get('/usuario', (req, res) => {
  res.json({
    user: 'Fulano de Tal nova versao 2'
  })
})

app.listen(3000, (req, res) => {
  console.log('rodando no localhost:3000')
})
