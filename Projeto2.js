const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) =>{
    let dados = {texto: 'ok!'};
    res.render('principal', dados)
})


let pessoas = [
    {id : 1, nome: 'pessoa1'},
    {id : 2, nome: 'pessoa2'},
    {id : 3, nome: 'pessoa3'}
];







app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});