import { Request, Response } from "express";
import { Product } from "../models";

export const productsController = {

    // GET /products
    index: async (req: Request, res: Response) => {
        try {
            const products = await Product.findAll({ include: 'category' })
            return res.json(products)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    // POST /products
    save: async (req: Request, res:Response) => {
        const { name, description, categoryId, quantity, price } = req.body

        try {
            const product = await Product.create({
                name,
                description,
                categoryId,
                quantity,
                price
            })

            return res.status(201).json(product)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    // GET /products/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const product = await Product.findByPk(id, { include: 'category' })

            return res.status(201).json(product)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    // PUT /products/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, description, categoryId, quantity, price } = req.body

        try {
            const [affectedRows, products] = await Product.update({
                name,
                description,
                categoryId,
                quantity,
                price,
            }, {
                where: { id },
                returning: true
            })

            return res.json(products[0])
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    //DELETE /products/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Product.destroy({ where: { id }})

            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}