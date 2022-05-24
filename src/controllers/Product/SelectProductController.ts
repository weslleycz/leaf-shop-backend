import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'

export class SelectProductController {
    async handle(req: Request, res: Response) {
        const idProduct = req.params.id

        try {
            const Select = await prismaClient.product.findUnique({
                where: {
                    id: idProduct,
                },
            })
            console.log(Select)
            return res.json({ data: Select, has_error: false })
        } catch (err) {
            return res.status(400).json({ error: err, has_error: true })
        }
    }
}
