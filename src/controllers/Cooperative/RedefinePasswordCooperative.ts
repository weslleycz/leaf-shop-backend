import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaClient'
import { sendEmail } from '../../config/sendEmail'
import { redisClient, getRedis, setRedis } from '../../config/redisConfig'

const { uuid } = require('uuidv4')

export class RedefinePasswordCooperative {
    async handle(req: Request, res: Response) {
        try {
            const code = uuid().substr(1, 7)
            const cooperative = await prismaClient.cooperative.findUnique({
                where: {
                    email: req.body.email,
                },
            })

            if (cooperative != null) {
                sendEmail({
                    code: code,
                    option: 'redefine_cooperative',
                    email: req.body.email,
                })
                await setRedis(code, cooperative.id)

                return res.json({ status: 'Codigo enviado', has_error: false })
            } else {
                return res
                    .status(400)
                    .json({ status: 'E-mail não cadastrado', has_error: true })
            }
        } catch {
            return res.status(400).json({ status: 'error', has_error: true })
        }
    }
}
