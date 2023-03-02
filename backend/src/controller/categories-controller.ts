import { Request, Response } from "express"
import { Category } from "../models"

export const categoriesController = {
    index: async (req: Request, res: Response) => {

        try {
            const categories = await Category.findAll()
            return res.json(categories)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }     
        }
    },

    save: async (req: Request, res: Response) => {
        const { name } = req.body

        try {
            const category = await Category.create({ name })
            
            return res.status(201).json(category)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const category = await Category.findByPk(id, { include: 'products' })
            return res.json(category)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name } = req.body

        try {
            const category = await Category.findByPk(id)

            if (category === null) {
                return res.status(404).json({ message: 'Produto não encontrado.' })
            }

            category.name = name

            await category.save()
            
            return res.status(200).json(category)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Category.destroy({ where: { id } })

            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

}