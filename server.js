const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT ?? 3000, () => {
  console.log('\x1b[32m', `Boilerplate app listening at http://localhost:${process.env.PORT ?? 3000}`)
})