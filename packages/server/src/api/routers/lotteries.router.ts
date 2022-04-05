import {Router} from "express";
import {lotteriesController} from "../controllers";

export const lotteriesRouter = Router();

lotteriesRouter.get("/", lotteriesController.getAll);

lotteriesRouter
    .route("/:id")
    .get(lotteriesController.getOne)
    .put(lotteriesController.updateOne)
    .delete(lotteriesController.removeOne);

lotteriesRouter.post("/create", lotteriesController.createOne);
