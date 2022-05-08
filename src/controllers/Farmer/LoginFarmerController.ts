import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

const crypto = require('crypto');

export class LoginFarmerController {
  async handle(req: Request, res: Response) {
    const dataLogin = req.body;
    const passwordTemp = req.body.password.toString();

    const key = crypto.createCipher('aes-128-cbc', passwordTemp);
    let str = key.update('abc', 'utf8', 'hex');
    str += key.final('hex');
    dataLogin.password = str;

    try {
      const farmer = await prismaClient.farmer.findUnique({
        where: {
          email: dataLogin.email,
        },
      });

      if (farmer != null) {
        if (farmer.password == dataLogin.password) {
          return res.json({
            data: { token: farmer.id, has_error: false },
          });
        }
        return res
          .status(400)
          .json({ data: 'senha incorreta', has_error: true });
      }
      return res
        .status(401)
        .json({ data: 'e-mail inválido', has_error: true });
    } catch {
      return res.status(401).json({ data: 'error', has_error: true });
    }
  }
}