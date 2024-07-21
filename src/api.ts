import express from 'express';
import dotenv from 'dotenv';

/* ROUTES */
import oreRoutes from './routes/oreRoutes';

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
app.use('/ores', oreRoutes);

/* SERVE ~ */
app.listen(PORT, () => {
  console.log(`API is listening on port: ${PORT}`);
});
