import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';
import * as EmailValidator from 'email-validator';
import { cnpj} from 'cpf-cnpj-validator';

const crypto = require('crypto');

export class CreatCooperativeController {
  async handle(req: Request, res: Response) {
    const dataCooperative = req.body;
    const passwordTemp = req.body.password.toString();
    const cnpjValidation = req.body.CNPJ_number

    const encryptionKey = crypto.createCipher('aes-128-cbc', passwordTemp);
    let encryptionFormula = encryptionKey.update('abc', 'utf8', 'hex');
    encryptionFormula += encryptionKey.final('hex');
    dataCooperative.password = encryptionFormula;
    
    try{
      if (EmailValidator.validate(req.body.email) == true) {
        if (cnpj.isValid(cnpjValidation)== true){
          const cooperative = await prismaClient.cooperative.create({
            data: {
              ...dataCooperative
            },
          });
          return res.json({ status: 'create cooperative', has_error: false });
        }else{
          return res.status(401).json({ status: 'CNPJ is not valid', has_error: true });
        }
      }else{
        return res
        .status(400)
        .json({ status: 'email is not valid', has_error: true });
      }
    }catch (err) {
      await prismaClient.$disconnect;
      console.log(err);
      return res.status(400).json({ data: err, has_error: true });
    }
  }
}