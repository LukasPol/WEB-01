var express = require ('express');

var app = express()

app.listen(3000, ()=> {
    console.log("HELLOOO")
});

app.get('/', (req,res)=>{
    res.send('home do projeto')
});

app.get('/index.html', (req, res) => {
    res.send('Oii')
});
