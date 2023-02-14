import express from 'express';
import routes from './Routes/CarRoutes';
import routesMoto from './Routes/motoRouter';

const app = express();

app.use(express.json());
app.use(routes);
app.use(routesMoto);

export default app;
