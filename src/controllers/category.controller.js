const db = require('../db');


class CategoryController {
    async createCategory(req, res){

        const {name} = req.body

        const newCategory = await db.query(`INSERT INTO category (name) values ($1) RETURNING *`,[name])

        res.json(newCategory.rows[0])
    }

    async getCategories(req, res){
        const categories = await db.query('SELECT * FROM category');

        res.json(categories.rows)
    }

}

module.exports = new CategoryController()