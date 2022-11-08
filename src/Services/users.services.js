
const Tasks = require('../models/ tasks.models');
const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');
const TaskCategories = require('../models/taskcategories.models');
const Users = require('../models/users.models');



class UsersServices {
    static async getAll() {
        try {
            const result = await Users.findAll({ attributes: ["id", "username", "email",] });
            return result;
        } catch (err) {
            throw (err);
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, { attributes: ["id", "username", "email",] });
            return result;
        } catch (err) {
            throw (err);
        }
    }

    static async getUserJoinAddres(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["email", "username"],
                include: {
                    model: Address,
                    as: "home",
                    attributes: {
                        exclude: ['id', 'userId', 'user_id'],
                    }
                }
            })
            return result;
        } catch (err) {
            throw (err)
        }

    }

    static async getUserJoinTasks(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["username"],
                include: {
                    model: Tasks,
                    as: "todo",
                    attributes: ['title', 'description', 'is_complete'],
                    include: {
                        model: TaskCategories,
                        as: "categories",
                        attributes: ["category_id"],
                        include: {
                            model: Categories,
                            as: "categories",
                            attributes: ["name"]
                        },
                    },
                },
            });
            return result;
        } catch (err) {
            throw (err)
        }
    }
}



module.exports = UsersServices;