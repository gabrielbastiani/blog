const Sequelize = require("sequelize");
const connection = require("../database/database");
const Caterory = require("../categories/Category");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Caterory.hasMany(Article); // Uma Categoria tem muitos artigos
Article.belongsTo(Caterory); // Um Artigo pertence a uma categoria

module.exports = Article;