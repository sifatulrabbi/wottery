import {NextFunction, Request, Response} from "express";
import {lotteriesService} from "../../services";

class LotteriesController {
    getAll(req: Request, res: Response, next: NextFunction): void {
        lotteriesService.getAll((err, result) => {
            if (err) return next(err);
            if (!result) {
                return res.status(404).json({message: "No lotteries found"});
            }
            res.status(200).json(result);
        });
    }

    getOne(req: Request, res: Response, next: NextFunction): void {
        lotteriesService.getOne(req.params.id, (err, result) => {
            if (err) return next(err);
            if (!result) {
                return res.status(404).json({message: "No lotteries found"});
            }
            res.status(200).json(result);
        });
    }

    updateOne(req: Request, res: Response, next: NextFunction): void {
        lotteriesService.updateOne(req.params.id, req.body, (err, result) => {
            if (err) return next(err);
            if (!result) {
                return res.status(404).json({message: "No lotteries found"});
            }
            res.status(200).json(result);
        });
    }

    createOne(req: Request, res: Response, next: NextFunction): void {
        lotteriesService.createOne(
            {...req.body, end_date: new Date()},
            (err, result) => {
                if (err) return next(err);
                if (!result) {
                    return res.status(500).json({
                        message: "Unable to create lottery",
                    });
                }
                res.status(200).json(result);
            },
        );
    }

    removeOne(req: Request, res: Response, next: NextFunction): void {
        lotteriesService.removeOne(req.params.id, (err, result) => {
            if (err) return next(err);
            if (!result) {
                return res.status(500).json({
                    message: "Unable to create lottery",
                });
            }
            res.status(200).json(result);
        });
    }
}

export const lotteriesController = new LotteriesController();
