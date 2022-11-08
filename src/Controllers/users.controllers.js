const Users = require('../models/users.models');
const UsersServices = require('../Services/users.services');


const getAllUsers = async (req, res) => {
    try{
        const result = await UsersServices.getAll();
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
    
}

const getUserById = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await UsersServices.getById(id);
        res.status(200).json(result)
    }catch (err){
        console.log(err);
    }
}

const getUserWithAddres = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await UsersServices.getUserJoinAddres(id);
        res.status(200).json(result);
    }catch(err){
        console.log(err)
    }
}

const getUsersWihTasks = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await UsersServices.getUserJoinTasks(id);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithAddres,
    getUsersWihTasks,
};