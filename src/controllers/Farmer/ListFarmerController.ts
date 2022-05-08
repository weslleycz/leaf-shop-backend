import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class ListFarmerController {
  async handle(req: Request, res: Response) {
    try {
      const allFarmer = await prismaClient.farmer.findMany();
      return res.json({ data: allFarmer, has_error: false });
    } catch {
      return res.status(400).json({ data: 'error', has_error: true });
    }
  }
}