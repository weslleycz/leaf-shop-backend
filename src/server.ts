import express from 'express';
import { router } from './routes';
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from '../swagger.json'

const app = express();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json({ limit: '200mb' }));

app.use(router);

app.listen(3000, () => console.log('Api started 🚀'));
