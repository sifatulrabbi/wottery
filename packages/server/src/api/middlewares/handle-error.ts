import {Request, Response, NextFunction} from "express";

export function handleError(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    if (err) {
        res.status(500).json({message: "Internal error"});
    } else {
        next();
    }
}
