const Router = require('express')

const router = new Router()

const buyerController = require('../controllers/buyer.controller')

router.post('/buyer', buyerController.createBuyer)
router.get('/buyer', buyerController.getBuyers)
router.post('/buyer/authorize', buyerController.authorizeBuyer)
router.put('/buyer',buyerController.updateBuyer)
router.delete('/buyer/:id', buyerController.deleteBuyer)

module.exports = router