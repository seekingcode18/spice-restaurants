
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Spice!')
})

app.get('*', (req, res) => {
  res.send('Spice!')
})

app.listen(port, () => {
  console.log(`Spice restaurant app listening on port ${port}`)
})
