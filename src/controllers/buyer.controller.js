const db = require('../db')


class BuyerController {
    async createBuyer(req, res){
        const {
            login,
            password,
            name
            } = req.body
        console.log(login, password, name)

        const newPerson = await db.query(`INSERT INTO buyer (login, password, name) values ($1, $2, $3) RETURNING *`, [login, password, name])
        res.json(newPerson.rows[0])
    }

    async getBuyers(req, res){
        const Buyers = await db.query('SELECT * FROM buyer');

        res.json(Buyers.rows)
    }

    async authorizeBuyer(req, res){
        const {login, password} = req.body
        const buyerFromDb = (await db.query(`SELECT * FROM buyer WHERE login = $1`, [login])).rows[0]
        
        if (!buyerFromDb || password!==buyerFromDb.password) res.status(404) && res.send('Incorrect data')

        res.status(200)
        res.send('Success')
    }

    async updateBuyer(req, res){
        
    }

    async deleteBuyer(req, res){
        
    }
}

module.exports = new BuyerController()