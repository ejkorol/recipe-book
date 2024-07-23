import rateLimit from 'express-rate-limit';

const convertTime = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const windowMs = 15 * 60 * 1000;
const maxRequests = 100;

export const apiLimiter = rateLimit({
  windowMs,
  max: maxRequests,
  message: `Limit: ${maxRequests} requests every ${convertTime(windowMs)}`
});
