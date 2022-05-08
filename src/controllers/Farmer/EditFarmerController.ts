import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class EditFarmerController{
  async handle(req: Request, res: Response) {
  const idFarmer = req.params.id;

  try{
    const updateFarmer = await prismaClient.farmer.update({
      where: {
        id: idFarmer
      },
      data: {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        birth_date: req.body.birth_date,
        avatar: req.body.avatar,
      },
    })
    return res.json({ status: 'edited farmer', has_error: false });
  }catch{
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}