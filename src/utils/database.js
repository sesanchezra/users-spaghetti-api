const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'users-spaguetti',
    username: 'postgres',
    password: '',
    post: 5432
})

module.exports = db
