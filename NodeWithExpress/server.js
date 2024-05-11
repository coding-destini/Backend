const express = require('express')

const app = express()



app.get('/', function (req, res) {
  res.send('Hello World abcd')
})

app.get('/contact', function (req, res) {
    res.send('Hello contact')
  })


app.listen(3000,()=>{
    console.log('Sever is started with express');
})


