import express from "express";
import dotenv from 'dotenv';

/* ENV CONFIG */
dotenv.config();
const PORT = process.env.PORT;

/* CONFIG */
const api = express();

/* ************************** */
/*         MIDDLEWARE         */
/* ************************** */
api.use(express.json());

/* SERVER */
api.listen(PORT, () => {
  console.log(`API is listening on port: ${PORT}`);
});
