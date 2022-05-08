import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class EditUserController {
  async handle(req: Request, res: Response) {
    const idUser = req.params.id;

    try {
      const updateUser = await prismaClient.user.update({
        where: {
          id: idUser
        },
        data: {
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          birth_date: req.body.birth_date,
          avatar: req.body.avatar,
        },
      })
      return res.json({ status: 'edited user', has_error: false });
    }catch{
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}