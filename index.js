const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hola Stuart')
})
app.listen(3000)
console.log('Estas en el puerto 3000')