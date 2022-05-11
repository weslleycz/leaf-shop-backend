import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const dataProduct = req.body;
    const idCooperative = req.params.idCooperative;

    dataProduct.name = dataProduct.name.toLowerCase();

    try {
      const product = await prismaClient.product.create({
        data: {
        cooperativeId:idCooperative,
          ...dataProduct
        },
      });
      return res.json({ status: 'created product', has_error: false });
    } catch (err) {
      await prismaClient.$disconnect;
      return res.status(400).json({ error: err, has_error: true });
    }
  }
}
