import * as express from "express";
import helmet from "helmet";
import * as cors from "cors";
import {router} from "./router";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(
    cors({
        origin: ["http://localhost:3000"],
    }),
);

app.use("/api", router);
