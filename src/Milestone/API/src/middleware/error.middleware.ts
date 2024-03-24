import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorLogger: ErrorRequestHandler = (error, req, res, next) => {
    console.error(`[Error]: ${error.message}`);
    next(error);
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    res.status(500).json({ message: 'Internal Server Error' });
};
