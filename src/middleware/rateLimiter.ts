import rateLimit from 'express-rate-limit';

const convertTime = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const windowMs = 15 * 60 * 1000;
const limit = 100;

export const apiLimiter = rateLimit({
  windowMs,
  limit,
  standardHeaders: true,
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: `Limit: ${limit} requests every ${convertTime(windowMs)}`
});
