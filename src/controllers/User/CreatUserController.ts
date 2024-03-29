import { Request, Response } from 'express';
import * as EmailValidator from 'email-validator';
import { prismaClient } from '../../database/prismaClient';
import { cpf} from 'cpf-cnpj-validator';

const crypto = require('crypto');

export class CreatUserController {
  async handle(req: Request, res: Response) {
    const dataUser = req.body;
    const passwordTemp = req.body.password.toString();
    const cpfValidation = req.body.CPF_number;

    const encryptionKey = crypto.createCipher('aes-128-cbc', passwordTemp);
    let encryptionFormula = encryptionKey.update('abc', 'utf8', 'hex');
    encryptionFormula += encryptionKey.final('hex');
    dataUser.password = encryptionFormula;

    try {
      if (EmailValidator.validate(req.body.email) == true) {
        if (cpf.isValid(cpfValidation)== true) {
          const user = await prismaClient.user.create({
            data: {
              ...dataUser,
            },
          });
          return res.json({ status: 'create user', has_error: false });
        }else{
          return res.status(401).json({ status: 'CPF is not valid', has_error: true });
        }
      }else{
        return res
        .status(400)
        .json({ status: 'email is not valid', has_error: true });
      }
    } catch (err) {
      await prismaClient.$disconnect;
      console.log(err);
      return res.status(400).json({ data: err, has_error: true });
    }
  }
}
