
import 'dotenv/config';
import express from 'express'
import path from "path"
import hbs from 'hbs'

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
const Partials = path.join(process.cwd(), '/views/partials')
hbs.registerPartials(Partials);
//Midllewares
//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    //const pagePathg = path.join(process.cwd(), "Hola Mundo")
    res.render('home', {
        nombre: ' Andrés Robles',
        titulo: 'Practicando Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: ' Andrés Robles',
        titulo: 'Practicando Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: ' Andrés Robles',
        titulo: 'Practicando Node'
    });
});

app.get('*', (req, res) => {
    const pagePath = path.join(process.cwd(), "./public/404.html")
    res.sendFile(pagePath);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

