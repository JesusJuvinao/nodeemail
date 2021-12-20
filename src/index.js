/* eslint-disable no-param-reassign */
import express from 'express'
import puppeteer from 'puppeteer'
import cron from 'node-cron'
cron.schedule('15 * * * *', () => {
    console.log('hola hola hola')
})
const app = express()
// const iPhone = puppeteer.devices['iPhone 6']
const fs = require('fs')
app.get('/', (req, res) => {
    res.send('Server online')
})
app.listen(3000)
console.log('Estas en el puerto 3000')
