var express = require ('express');

var app = express()

app.listen(3000, ()=> {
    console.log("HELLOOO")
});

app.get('/index.html', (req, res) => {
    res.send('Oii')
});