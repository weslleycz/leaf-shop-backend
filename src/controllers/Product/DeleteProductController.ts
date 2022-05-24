import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        const idProduct = req.params.id
        try {
            const deleteProduct = await prismaClient.product.delete({
                where: {
                    id: idProduct,
                },
            })
            return res.json({ status: 'product delete', has_error: false })
        } catch {
            return res.status(400).json({ data: 'error', has_error: true })
        }
    }
}
