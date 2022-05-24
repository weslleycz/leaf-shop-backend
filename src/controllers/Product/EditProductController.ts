import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class EditProductController {
    async handle(req: Request, res: Response) {
        const idProduct = req.params.id
        const productEdit = req.body

        try {
            const updateProduct = await prismaClient.product.update({
                where: {
                    id: idProduct,
                },
                data: {
                    ...productEdit,
                },
            })
            console.log(updateProduct)
            return res.json({ status: 'edited product', has_error: false })
        } catch {
            return res.status(400).json({ data: 'error', has_error: true })
        }
    }
}
