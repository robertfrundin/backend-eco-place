const db = require('../db');
const { DEFAULT_RATING } = require('../common/consts');
console.log(DEFAULT_RATING)


class SellerController {
    async createSeller(req, res){

        const {
            login,
            password,
            name
            } = req.body

        const newPerson = await db.query(
            `INSERT INTO seller (login, password, name, rating) values ($1, $2, $3, $4) RETURNING *`,
             [login, password, name, DEFAULT_RATING]
        )

        res.json(newPerson.rows[0])
    }

    async getSellers(req, res){
        const Sellers = await db.query('SELECT * FROM seller');

        res.json(Sellers.rows)
    }

    async getOneSeller(req, res){
        
    }

    async updateSeller(req, res){
        
    }

    async deleteSeller(req, res){
        
    }
}

module.exports = new SellerController()