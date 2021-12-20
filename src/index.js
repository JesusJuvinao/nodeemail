/* eslint-disable no-param-reassign */
import express from 'express'
import cron from 'node-cron'
const fs = require('fs')
cron.schedule('15 * * * *', () => {
    console.log('hola hola hola')
})
const app = express()
app.get('/', (req, res) => {
    res.send('Server online')
})
app.listen(3000)
console.log('Estas en el puerto 3000')
