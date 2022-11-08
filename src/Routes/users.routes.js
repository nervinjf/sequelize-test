const { Router } = require("express");
const { getAllUsers, getUserById, getUserWithAddres, getUsersWihTasks } = require('../Controllers/users.controllers');

const router = Router();


router.get("/users", getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/address', getUserWithAddres);

router.get('/users/:id/tasks', getUsersWihTasks);


module.exports = router;










