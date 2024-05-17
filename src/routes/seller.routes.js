const Router = require('express')

const router = new Router()

const sellerController = require('../controllers/seller.controller')

router.post('/seller', sellerController.createSeller)
router.get('/seller', sellerController.getSellers)
router.get('/seller/:id', sellerController.getOneSeller)
router.put('/seller',sellerController.updateSeller)
router.delete('/seller/:id', sellerController.deleteSeller)

module.exports = router