import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class SearchProductController {
  async handle(req: Request, res: Response) {
    const name = req.body;
    try {
      const search = await prismaClient.product.findMany();

      let result = search.map(product => {
        if (product.name.search('banana')==0) {
          console.log(product);
          return product
        }
    });

      return res.json({ data: result, has_error: false });
    } catch (err) {
      return res.status(400).json({ error: err, has_error: true });
    }
  }
}
