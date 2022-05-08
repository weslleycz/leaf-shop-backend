import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteFarmerController{
  async handle(req: Request, res: Response) {
    const idFarmer = req.params.id;
    try{
      const deleteFarmer  = await prismaClient.farmer.delete({
        where: {
          id:idFarmer
        },
      });
      return res.json({ status: 'farmer delete', has_error: false });
    }catch{
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}