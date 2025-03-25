import express from "express";
import loadRoutes from './loaders/routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
loadRoutes(app);

export default app;