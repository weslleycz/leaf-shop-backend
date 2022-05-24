import express from 'express'
import { router } from './routes'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import http from 'http'

import helmet from 'helmet'
import cors from 'cors'

dotenv.config({ path: __dirname + '/.env' })

const app = express()

app.use(helmet())

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

app.use(express.json({ limit: '200mb' }));

app.use(router)

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export {serverHttp,io}
