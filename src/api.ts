import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/* ROUTES */
import routes from "./routes"

/* MIDDLEWARE */
import { errorHandler } from './middleware/errorHandler';

/* ********************************** */
/*              ENV CONFIG            */
/* ********************************** */
dotenv.config();
const PORT = process.env.PORT || 3000;

/* CONFIG */
const api = express();

/* ********************************** */
/*              MIDDLEWARE            */
/* ********************************** */

/* CORS W/ DEFAULT */
api.use(cors());

api.use(express.json());
api.use(express.static('public'));
api.use(routes);

/* ********************************** */
/*           ERROR HANDLER            */
/* ********************************** */
api.use(errorHandler);

/*
 * Error handler middleware must be declared after all routes
 * to allow it to catch errors thrown from any route.
*/

/* SERVE ~ */
api.listen(PORT, () => {
  console.log(`API is listening on port: ${PORT}`);
});
