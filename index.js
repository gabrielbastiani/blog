const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CaterogiesController");
const articlesController = require("./articles/ArticlesControllers");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View Engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

app.use("/",categoriesController);
app.use("/",articlesController);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(3000, () => {
    console.log("O servidor está rodando!")
})