var express = require('express');

var app = express();

var alunos =  [
    { 'matricula': 123456,
      'nome': 'Lukas'
    },
    { 'matricula': 654321,
      'nome': 'José'
    }
]

// Servidor no ar
app.listen(3000, ()=> { } );

app.get('/', (req, res) =>{
    res.send('eee lá vamos nósss');
})


// Retornar todos alunos
app.get('/alunos', (req, res) =>{
    res.send(alunos);
});

// Retornar determinada matricula
app.get('/alunos/:mat', (req,res)=>{
    var mat = req.params.mat;
    res.send('aaaaaaaaa');
})