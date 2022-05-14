import express from 'express';
import { router } from './routes';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: __dirname+'/.env' });

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json({ limit: '200mb' }));

app.use(router);

app.listen(process.env.PORT, () => console.log(`🚀 Server started on port ${process.env.PORT}`));
