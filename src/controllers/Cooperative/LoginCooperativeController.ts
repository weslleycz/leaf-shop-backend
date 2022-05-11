import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
const crypto = require('crypto');

export class LoginCooperativeController {
  async handle(req: Request, res: Response) {
    const dataLogin = req.body;
    const passwordTemp = req.body.password.toString();

    const securityKey = crypto.createCipher('aes-128-cbc', passwordTemp);
    let  encryptionFormula = securityKey.update('abc', 'utf8', 'hex');
    encryptionFormula += securityKey.final('hex');
    dataLogin.password =  encryptionFormula;

    try {
      const user = await prismaClient.cooperative.findUnique({
        where: {
          email: dataLogin.email,
        },
      });

      if (user != null) {
        if (user.password == dataLogin.password) {
          return res.json({
            data: { token: user.id, has_error: false },
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