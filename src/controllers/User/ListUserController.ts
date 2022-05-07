import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListUserController {
  async handle(req: Request, res: Response) {
    try {
      const allUsers = await prismaClient.user.findMany();
      return res.json({ data: allUsers, has_error: false });
    } catch {
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}
