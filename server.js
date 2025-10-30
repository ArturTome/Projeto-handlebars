const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/pessoas', (req,res) => {
    res.render('ListarPessoas', { pessoas });
});

app.get('/pessoas/create', (req,res) => {
    res.render('cadastrarPessoas');
});

app.post('/pessoas', (req,res) => {
    const nome = req.body.nome;
    const novaPessoa = {
        id: pessoas.length + 1,
        nome: nome
    };

    pessoas.push(novaPessoa);

    res.render('ListarPessoas', { pessoas });
});

app.get('/pessoas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa){
        res.render('detalharPessoas', { pessoa });
    } else {
        res.status(404).send('Este não foi comido.')
    }
});

let pessoas = [
    {id : 1, nome: 'Joao G', idade: 17, raca: 'humano'},
    {id : 2, nome: 'Tomé', idade: 85, raca: 'não-humano'},
    {id : 3, nome: 'Davi', idade: 23, raca:'humano'}
];







app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});