const db = require('../db');
const { DEFAULT_RATING } = require('../common/consts');
console.log(DEFAULT_RATING)


class ProductController {
    async createProduct(req, res){

        const {
            name,
            category_id,
            price,
            photo,
            seller_id
            } = req.body

        const newProduct = await db.query(
            `INSERT INTO product (name, category_id, price, rating, photo, seller_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
             [name, category_id, price, DEFAULT_RATING, photo, seller_id]
        )

        res.json(newProduct.rows[0])
    }

    async getProducts(req, res){
        const products = await db.query('SELECT * FROM product');

        res.json(products.rows)
    }

    async getOneProduct(req, res){
        
    }

    async updateProduct(req, res){
        
    }

    async deleteProduct(req, res){
        
    }
}

module.exports = new ProductController()