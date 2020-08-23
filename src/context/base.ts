import { Request, Response } from 'express'

export interface BaseContext {
  req: Request;
  res: Response;
  payload?: { userId: string };
}
