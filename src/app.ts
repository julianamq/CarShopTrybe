import express from 'express';
import routes from './Routes/CarRoutes';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
