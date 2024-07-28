import { Request, Response, NextFunction } from 'express';
const delay = (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    next();
  }, 1000);
};

export default delay;
