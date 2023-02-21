import express from 'express'
import { categoriesController } from './controller/categories-controller'
import { productsController } from './controller/products-controller'


const router = express.Router()

router.get('/', (req, res) => res.json({hello: 'Hello, world!'}))

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.save)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.delete)

router.get('/products', productsController.index)
router.get('/products/:id', productsController.show)
router.post('/products', productsController.save)
router.put('/products/:id', productsController.update)
router.delete('/products/:id', productsController.delete)


export { router }