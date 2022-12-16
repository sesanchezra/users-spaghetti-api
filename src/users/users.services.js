const usersControllers = require('./users.controllers')
const getAllUsers = (req,res) => {
    usersControllers.findAllUsers()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const getUserById = (req,res) => {
    const id=req.params.id
    usersControllers.findUserById(id)
        .then((data)=>{
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const postUser = (req,res) => {
    const {first_name,last_name,email,password,birthday}= req.body

    usersControllers.createUser({first_name,last_name,email,password,birthday})
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const patchUser = (req,res) => {
    const id = req.params.id
    const {first_name,last_name,email,password,birthday}= req.body

    usersControllers.updateUser(id,{first_name,last_name,email,password,birthday})
        .then((data)=>{
            if(data){
                res.status(200).json({message: 'User modified succesfully'})
            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const deleteUser = (req,res) => {
    const id=req.params.id
    usersControllers.deleteUser(id)
        .then((data)=>{
            if(data===1){
                res.status(204).json(data)
            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

module.exports={
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}


