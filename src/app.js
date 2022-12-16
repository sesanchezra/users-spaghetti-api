const express = require('express')
//falta importar el userRouter
const usersRouter = require('./users/users.router')
const port = 9000

const app = express()
const db = require('./utils/database')

app.use(express.json())

db.authenticate()
    .then(()=> console.log('Database autenticada correctamente'))
    .catch((error)=> console.log(error))

db.sync()
    .then(()=> console.log('Database sincronizada correctamente'))
    .catch((error)=> console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

//Falta el app use con el userRouter
app.use('/api/v1', usersRouter)

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})
