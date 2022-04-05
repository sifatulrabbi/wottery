import {Router} from "express";
import {lotteriesController} from "../controllers";

export const lotteriesRouter = Router();

lotteriesRouter.get("/", lotteriesController.getAll);

lotteriesRouter.post("/create", lotteriesController.createOne);
