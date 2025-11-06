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
    const idade = req.body.idade;
    const raca = req.body.raca;
    const EXP = req.body.EXP;
    const novaPessoa = {
        id: pessoas.length + 1,
        nome: nome,
        idade: idade,
        raca: raca,
        EXP: EXP
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

app.get('/pessoas/:id/editar', (req,res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (!pessoa) return res.status(404).send('pessoa Não encontrada');
    
    res.render('editarPessoas', {pessoa});
});

app.post('/pessoas/:id/', (req,res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa) {
        pessoa.nome = req.body.nome;
        res.render('listarPessoas', {pessoas});
    } else {
        return res.status(404).send('pessoa Não encontrada');
    }
    
});

app.post('/pessoas/:id/excluir', (req,res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(p => p.id === id);

    if (index !== -1){
        pessoas.splice(index, 1)
        res.redirect('/pessoas')
    } else {
        return res.status(404).send('Pessoa não escontrada')
    }
})

let pessoas = [
    {id : 1, nome: 'Joao G', idade: 17, raca: 'humano', EXP: 0},
    {id : 2, nome: 'Tomé', idade: 85, raca: 'não-humano', EXP: 70},
    {id : 3, nome: 'Davi', idade: 23, raca:'humano', EXP: 20}
];







app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});