import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const idUser = req.params.id;
    console.log(idUser);
    try {
      const deleteUser = await prismaClient.user.delete({
        where: {
          id: idUser,
        },
      });
      return res.json({ status: 'user delete', has_error: false });
    } catch {
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}
