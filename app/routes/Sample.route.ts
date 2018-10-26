import * as express from "express";
import { SampleController } from "../controllers/Sample.controller";
import { createSchema, deleteSchema, updateSchema } from "../middlewares/schemas/Sample.schemas";
import { validator } from "../middlewares/Validator.middleware";
import { Router } from "./Router";

export class SampleRouter extends Router {
    constructor() {
        super(SampleController);
        this.router = express.Router()
            .get("/", this.handler(SampleController.prototype.all))
            .get("/:id", this.handler(SampleController.prototype.find))
            .post("/", [ validator(createSchema) ], this.handler(SampleController.prototype.create))
            .put("/", [ validator(updateSchema) ],  this.handler(SampleController.prototype.update))
            .delete("/", [ validator(deleteSchema) ], this.handler(SampleController.prototype.delete));
    }
}
