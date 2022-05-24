import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { redisClient, getRedis, setRedis } from '../../config/redisConfig'
const crypto = require('crypto')

export class ValidateNewPasswordCorpe {
    async handle(req: Request, res: Response) {
        const dataUser = req.body
        const passwordTemp = req.body.password.toString()
        const encryptionKey = crypto.createCipher('aes-128-cbc', passwordTemp)
        let encryptionFormula = encryptionKey.update('abc', 'utf8', 'hex')
        encryptionFormula += encryptionKey.final('hex')

        try {
            const codeTeste = await getRedis(req.body.code)
            if (codeTeste != null) {
                const updateUser = await prismaClient.cooperative.update({
                    where: {
                        id: codeTeste,
                    },
                    data: {
                        password: encryptionFormula,
                    },
                })
                return res.json({ status: 'Senha redefinida', has_error: true })
            } else {
                return res.json({ status: 'Código inválido', has_error: true })
            }
        } catch {
            return res.status(401).json({ status: 'error', has_error: true })
        }
    }
}
