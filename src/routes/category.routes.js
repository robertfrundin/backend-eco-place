const Router = require('express')

const router = new Router()

const categoryController = require('../controllers/category.controller')

router.post('/category', categoryController.createCategory)
router.get('/category', categoryController.getCategories)

module.exports = router