import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { setRedis } from '../../config/redisConfig'
const crypto = require('crypto')

export class LoginCooperativeController {
    async handle(req: Request, res: Response) {
        const dataLogin = req.body
        const passwordTemp = req.body.password

        try {
            const securityKey = crypto.createCipher('aes-128-cbc', passwordTemp)
            let encryptionFormula = securityKey.update('abc', 'utf8', 'hex')
            encryptionFormula += securityKey.final('hex')
            dataLogin.password = encryptionFormula
            const user = await prismaClient.cooperative.findUnique({
                where: {
                    email: dataLogin.email,
                },
            })

            if (user != null) {
                if (user.password == dataLogin.password) {
                    const produtes = await prismaClient.product.findMany({
                        where: {
                            cooperativeId: user.id,
                        },
                    })
                    await setRedis(user.id, JSON.stringify(produtes))
                    return res.json({
                        data: { token: user.id, has_error: false },
                    })
                }
                return res.json({ data: 'Senha incorreta', has_error: true })
            }
            return res.json({ data: 'Email inválido', has_error: true })
        } catch {
            return res.status(401).json({ data: 'error', has_error: true })
        }
    }
}
