import express from 'express';
import dotenv from 'dotenv';

/* MIDDLEWARE */
import { errorHandler } from './middleware/errorHandler';

/* ROUTES */
import itemRoutes from './routes/itemRoutes';
import attributeRoutes from './routes/attributeRoutes';

/* ********************************** */
/*              ENV CONFIG            */
/* ********************************** */
dotenv.config();
const PORT = process.env.PORT || 3000;

/* CONFIG */
const app = express();

/* ********************************** */
/*              MIDDLEWARE            */
/* ********************************** */
app.use(express.json());
app.use(express.static('public'));


/* ********************************** */
/*                ROUTES              */
/* ********************************** */
app.use('/api/items', itemRoutes);
app.use('/api/attributes', attributeRoutes);

/* ********************************** */
/*           ERROR HANDLER            */
/* ********************************** */
app.use(errorHandler);

/*
 * Error handler middleware must be declared after all routes
 * to allow it to catch errors thrown from any route.
*/

/* SERVE ~ */
app.listen(PORT, () => {
  console.log(`API is listening on port: ${PORT}`);
});
